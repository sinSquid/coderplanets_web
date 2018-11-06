/*
 * PostContentStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:PostContentStore')
/* eslint-enable no-unused-vars */

const PostContentStore = t
  .model('PostContentStore', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get viewingPostData() {
      return stripMobx(self.root.viewing.post)
    },
  }))
  .actions(self => ({
    callInformer() {
      self.root.callInformer()
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostContentStore
