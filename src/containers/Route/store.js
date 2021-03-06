/*
 * RouteStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { merge, pickBy, omit, isEmpty } from 'ramda'

import { PAGE_SIZE } from '@/config'
import {
  Global,
  isClientSide,
  markStates,
  buildLog,
  serializeQuery,
} from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:RouteStore')

const Query = T.model('Query', {
  page: T.optional(T.string, '1'),
  size: T.optional(T.string, String(PAGE_SIZE.D)),
  tab: T.maybeNull(T.string),
  // sort .... [when, ...]
  // view ... [chart, list ...]
})

const RouteStore = T.model('RouteStore', {
  communityPath: T.optional(T.string, ''),
  threadPath: T.optional(T.string, ''),
  mainPath: T.optional(T.string, ''),
  subPath: T.optional(T.string, ''),
  query: T.optional(Query, {}),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      const { communityPath, threadPath, mainPath, subPath } = self
      return { communityPath, threadPath, mainPath, subPath }
    },
    get isNotDesktop() {
      const { isMobile } = self.root

      return isMobile
    },
  }))
  .actions((self) => ({
    /**
     * sync query to current url
     * - if current url is subdomain, then we should
     * - reload to that page directly
     * @param {*} query
     * @param {boolean} [opt={ onlyDesktop: false }] if onlyDescktop set to true
     *        then just leave it, otherwise it will mislead the history back btn in mobile
     *        在手机上会导致触发两次才返回
     *
     * @returns {boolean}
     */
    markRoute(query, opt) {
      const defaultOpt = { onlyDesktop: false }
      const option = merge(defaultOpt, opt)

      if (!isClientSide) return false
      if (option.onlyDesktop && self.isNotDesktop) {
        return false
      }

      const { mainPath, subPath, page } = query
      query = pickBy((v) => !isEmpty(v), query)

      if (mainPath) self.mainPath = mainPath
      if (subPath) self.subPath = subPath

      if (page && String(page) === '1') query = omit(['page'], query)

      // const allQueryString = serializeQuery(query)
      const queryString = serializeQuery(omit(['mainPath', 'subPath'], query))

      // const url = `/${allQueryString}`
      const asPath = `/${self.mainPath}/${self.subPath}${queryString}`

      // NOTE: shallow option only works for same page url
      // if page is diffrent, it will cause page reload
      /* console.log('push url: ', url) */
      // Router.push(url, asPath, { shallow: true })
      // see: https://stackoverflow.com/questions/824349/modify-the-url-without-reloading-the-page
      /* return Global.history.pushState({}, null, url) */
      // NOTE:  Router.push(url, asPath, { shallow: true }) is not working on pruction env
      return Global.history.pushState({}, null, asPath)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default RouteStore
