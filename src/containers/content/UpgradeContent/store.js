/*
 * UpgradeContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:UpgradeContent')

const UpgradeContent = T.model('UpgradeContent', {
  payType: T.optional(T.enumeration(['yearly', 'monthly']), 'yearly'),
  pkgType: T.optional(
    T.enumeration(['free', 'advance', 'girl', 'team']),
    'advance',
  ),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get dashboardItems() {
      return [
        {
          pkgType: 'free',
          desc: '免费用户，常规社区功能，部分高级选项有数量限制',
          yearlyPrice: '0',
          monthlyPrice: '0',
          illustration: 'free',
          serviceItems: [{ title: '发布各种内容' }, { title: '创建子社区' }],
        },
        {
          pkgType: 'advance',
          desc: '更好更全面的阅读、交互体验。优先参与社区规划共建',
          yearlyPrice: '59',
          monthlyPrice: '5.9',
          illustration: 'advance',
          serviceItems: [
            { title: '主题设置' },
            { title: '头像特殊标识' },
            { title: '发起投票' },
            { title: '设置文章打赏' },
            // { title: '订阅栏分组' },
            { title: '需求优先响应' },
          ],
        },
        {
          pkgType: 'girl',
          desc: '女生福利，高级会员的所有服务，无理由升级',
          yearlyPrice: '0',
          monthlyPrice: '0',
          illustration: 'girl',
          serviceItems: [
            { title: '主题设置' },
            { title: '头像特殊标识' },
            { title: '发起投票' },
            { title: '设置文章打赏' },
            // { title: '订阅栏分组' },
            { title: '需求优先响应' },
          ],
        },
        {
          pkgType: 'team',
          desc: '全部功能。适合独立开发者、小团队等需要独立空间的场景',
          yearlyPrice: '199',
          monthlyPrice: '19.9',
          illustration: 'ufo',
          serviceItems: [
            {
              title: '二级域名',
            },
            {
              title: '隐藏主站其他入口',
            },
            {
              title: '8 小时工单支持',
            },
            {
              title: 'Github 主页鸣谢',
            },
            {
              title: '站内鸣谢',
            },
          ],
        },
      ]
    },
  }))
  .actions((self) => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    cashierHelper(opt) {
      self.root.cashierHelper(opt)
    },
    upgradeHelper() {
      self.show = true
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UpgradeContent