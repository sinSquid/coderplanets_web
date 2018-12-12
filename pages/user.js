/*
   this page is for /user/xxx
 */
import React from 'react'
import { Provider } from 'mobx-react'
import R from 'ramda'

import initRootStore from '../stores/init'
import { GAWraper, ErrorPage } from '../components'

// import UserBannerSchema from '../containers/UserBanner/schema'
import {
  ThemeWrapper,
  MultiLanguage,
  Sidebar,
  Preview,
  Doraemon,
  Route,
  BodyLayout,
  Header,
  Banner,
  Content,
  Footer,
} from '../containers'

import {
  BStore,
  makeGQClient,
  queryStringToJSON,
  nilOrEmpty,
  getSubPath,
  USER_THREAD,
  /* BStore, */
  ROUTE,
  pagedFilter,
  ssrAmbulance,
} from '../utils'

import { P } from '../containers/schemas'

// try to fix safari bug
// see https://github.com/yahoo/react-intl/issues/422
global.Intl = require('intl')

async function fetchData(props, opt) {
  const { realname } = R.merge({ realname: true }, opt)

  const token = realname ? BStore.cookie.from_req(props.req, 'jwtToken') : null
  const gqClient = makeGQClient(token)
  const userHasLogin = nilOrEmpty(token) === false

  // console.log('userHasLogin: ', userHasLogin)
  // console.log('token: ', token)
  /* console.log('user page props: ', props) */
  const login = R.toLower(getSubPath(props))
  // console.log('login =============== ', login)

  const sessionState = gqClient.request(P.sessionState)
  const user = gqClient.request(P.user, { login, userHasLogin })

  const filter = pagedFilter(1)
  const subscribedCommunities = gqClient.request(P.subscribedCommunities, {
    filter,
  })

  return {
    ...(await sessionState),
    ...(await user),
    ...(await subscribedCommunities),
  }
}

export default class UserPage extends React.Component {
  static async getInitialProps(props) {
    const { asPath } = props

    const query = queryStringToJSON(asPath)

    let resp
    try {
      resp = await fetchData(props)
    } catch ({ response: { errors } }) {
      if (ssrAmbulance.hasLoginError(errors)) {
        resp = await fetchData(props, { realname: false })
      }

      return { statusCode: 404 }
    }

    const { sessionState, user, subscribedCommunities } = resp

    return {
      langSetup: {},
      account: {
        user: sessionState.user || {},
        isValidSession: sessionState.isValid,
        userSubscribedCommunities: subscribedCommunities,
      },
      route: { mainPath: ROUTE.USER, subPath: user.id, query },
      userContent: { activeThread: query.tab || USER_THREAD.PUBLISH },
      viewing: { user },
    }
  }

  constructor(props) {
    super(props)

    const store = props.statusCode
      ? initRootStore({ langSetup: {} })
      : initRootStore({ ...props })

    this.store = store
    // this.store = initRootStore({ ...props })
  }

  render() {
    const { statusCode } = this.props

    return (
      <Provider store={this.store}>
        <GAWraper>
          <ThemeWrapper>
            {statusCode ? (
              <ErrorPage errorCode={statusCode} />
            ) : (
              <React.Fragment>
                <Route />
                <MultiLanguage>
                  <Sidebar />
                  <Preview />
                  <Doraemon />
                  <BodyLayout>
                    <Header />
                    <Banner />
                    <Content />
                    <Footer />
                  </BodyLayout>
                </MultiLanguage>
              </React.Fragment>
            )}
          </ThemeWrapper>
        </GAWraper>
      </Provider>
    )
  }
}
