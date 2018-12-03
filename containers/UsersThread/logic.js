// import R from 'ramda'

import { makeDebugger, $solver, asyncRes, asyncErr, ERR } from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:UsersThread')
/* eslint-enable no-unused-vars */

let store = null

export function loadGeoData() {
  store.markState({ geoDataLoading: true })
  const { id } = store.curCommunity
  sr71$.query(S.communityGeoInfo, { id })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('communityGeoInfo'),
    action: ({ communityGeoInfo }) => {
      debug('communityGeoInfo->:  ', communityGeoInfo)
      store.markState({
        geoInfos: communityGeoInfo,
        geoDataLoading: false,
      })
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(_store) {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadGeoData()
}
