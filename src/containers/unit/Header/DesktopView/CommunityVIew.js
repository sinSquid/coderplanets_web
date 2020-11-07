/*
 *
 * Header
 *
 */

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import T from 'prop-types'
import { contains, values } from 'ramda'

import { ROUTE, METRIC } from '@/constant'
import { connectStore, buildLog, getRoutePathList } from '@/utils'

import UserLister from '@/containers/user/UserLister'
import Navigator from '@/components/Navigator'

import UserAccount from '../UserAccount'
import AddOns from '../AddOns'

import {
  Wrapper,
  InnerWrapper,
  RouterWrapper,
  Search,
  HeaderSearchIcon,
  Operations,
} from '../styles/desktop_view/community_view'
import { useInit, openDoraemon } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

let MailBox

const HeaderContainer = ({ header: store, metric }) => {
  log('header metric: ', metric)
  useInit(store)

  const {
    isOnline,
    leftOffset,
    accountInfo,
    isLogin,
    curCommunity,
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store

  useEffect(() => {
    if (isLogin) {
      MailBox = dynamic(() => import('@/containers/tool/MailBox'), {
        /* eslint-disable react/display-name */
        loading: () => <div />,
        ssr: false,
      })
    }
  }, [isLogin])

  // TODO:  move router logic to store
  const [hasNoBottomBorder, setHasNoBottomBorder] = useState(false)
  const router = useRouter()
  const [mainPath] = getRoutePathList(router.asPath)

  useEffect(() => {
    setHasNoBottomBorder(
      contains(mainPath, [
        ROUTE.DISCOVERY,
        ROUTE.SPONSOR,
        ROUTE.FRIENDS,
        ROUTE.SUBSCRIBE,
        ROUTE.POST,
      ]),
    )
  }, [mainPath])

  return (
    <Wrapper
      id="whereCallShowDoraemon"
      testId="header"
      leftOffset={leftOffset}
      noBorder={hasNoBottomBorder}
    >
      <InnerWrapper metric={metric} layout={bannerLayout}>
        <RouterWrapper>
          <Navigator
            curCommunity={curCommunity}
            layout={accountInfo.customization.bannerLayout}
            isOnline={isOnline}
            metric={metric}
          />
        </RouterWrapper>
        <AddOns />
        <Operations>
          <Search onClick={openDoraemon} testId="header-search">
            <HeaderSearchIcon testId="header-search-icon" />
          </Search>

          {MailBox && <MailBox />}
          {/* <UpgradePackages /> */}
          <UserLister />
          {/* <Cashier /> */}
          <UserAccount isLogin={isLogin} accountInfo={accountInfo} />
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

HeaderContainer.propTypes = {
  metric: T.oneOf(values(METRIC)),
  header: T.any.isRequired,
}

HeaderContainer.defaultProps = {
  metric: METRIC.COMMUNITY,
}

export default connectStore(HeaderContainer)
