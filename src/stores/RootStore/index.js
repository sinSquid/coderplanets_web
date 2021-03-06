/*
 * rootStore store
 *
 */

import { types as T } from 'mobx-state-tree'
import { merge } from 'ramda'

import { EVENT } from '@/constant'
import {
  buildLog,
  markStates,
  toast,
  toastBarColor,
  themeSkins,
  send,
} from '@/utils'

import {
  // domain
  RouteStore,
  AccountStore,
  GlobalLayoutStore,
  RichEditorStore,
  HeaderStore,
  ViewingStore,
  ThemeStore,
  ThemeDefaults,
  ErrorBoxStore,

  // threads
  PostsThreadStore,
  VideosThreadStore,
  ReposThreadStore,
  WikiThreadStore,
  JobsThreadStore,
  UsersThreadStore,
  CheatsheetThreadStore,
  // banners
  ArticleDigestStore,
  CommunityDigestStore,
  // content
  CommunityContentStore,
  PostContentStore,
  JobContentStore,
  VideoContentStore,
  RepoContentStore,
  DiscoveryContentStore,
  CommunityEditorStore,
  UserContentStore,
  // footer
  FooterStore,
  // viewers
  PostViewerStore,
  JobViewerStore,
  ArticleViewerHeader,
  ArticleBodyHeaderStore,
  VideoViewerStore,
  RepoViewerStore,
  CommentsStore,
  MailsViewerStore,

  // toolbox
  DoraemonStore,
  DrawerStore,
  SidebarStore,
  PostEditorStore,
  JobEditorStore,
  VideoEditorStore,
  RepoEditorStore,
  AccountEditorStore,
  MailBoxStore,
  LabelerStore,
  DocUploaderStore,
  AvatarAdderStore,
  TagsBarStore,
  UserListerStore,
  InformerStore,
  GirlVerifierStore,
  CashierStore,
  ArticleAuthorCardStore,
  CommunitySetterStore,
  // user page
  UserPublishedStore,
  UserPublishedCommentsStore,
  UserSettingsStore,
  UserBillingStore,
  UserFavoritedStore,
  UserStaredStore,
  FavoritesCatsStore,
  //
  MeetupsContentStore,
  HaveADrinkContentStore,
  CoolGuideContentStore,

  // GEN: IMPORT SUBSTORE
  ArticleEditorStore,
  WorksEditorStore,
  UserProfileStore,
  UpgradeContentStore,
  ArticleFooterStore,
  ArticleStickerStore,
  ModeLineMenuStore,
  ModeLineStore,
  FriendsContentStore,
  SubscribeContentStore,
  RecipesContentStore,
  SponsorContentStore,
  JoinModalStore,
  TrendingContentStore,
  WorksContentStore,
  C11NSettingPanelStore,
  RoadmapThreadStore,
} from '../index'

/* eslint-disable-next-line */
const log = buildLog('S:rootStore')

const rootStore = T.model({
  // domain stores
  account: T.optional(AccountStore, {}),
  route: T.optional(RouteStore, {}),
  viewing: T.optional(ViewingStore, {}),
  comments: T.optional(CommentsStore, {}),
  theme: T.optional(ThemeStore, ThemeDefaults),
  locale: T.optional(T.enumeration('locale', ['zh', 'en']), 'zh'),
  errorCode: T.maybeNull(T.number),
  // domain end

  // toolbox
  sidebar: T.optional(SidebarStore, { menuItems: [] }),
  drawer: T.optional(DrawerStore, { visible: false }),
  doraemon: T.optional(DoraemonStore, {}),
  jobEditor: T.optional(JobEditorStore, {}),
  postEditor: T.optional(PostEditorStore, {}),
  videoEditor: T.optional(VideoEditorStore, {}),
  repoEditor: T.optional(RepoEditorStore, {}),
  accountEditor: T.optional(AccountEditorStore, {}),
  mailBox: T.optional(MailBoxStore, {}),
  labeler: T.optional(LabelerStore, {}),
  docUploader: T.optional(DocUploaderStore, {}),
  avatarAdder: T.optional(AvatarAdderStore, {}),
  // toolbox end

  // layouts > xxx > papers
  // layouts
  globalLayout: T.optional(GlobalLayoutStore, {}),
  richEditor: T.optional(RichEditorStore, {}),
  header: T.optional(HeaderStore, {}),
  // layouts end

  errorBox: T.optional(ErrorBoxStore, {}),

  // banners
  articleDigest: T.optional(ArticleDigestStore, {}),
  communityDigest: T.optional(CommunityDigestStore, {}),

  // content
  communityContent: T.optional(CommunityContentStore, {}),

  discoveryContent: T.optional(DiscoveryContentStore, {}),
  communityEditor: T.optional(CommunityEditorStore, {}),
  postContent: T.optional(PostContentStore, {}),
  jobContent: T.optional(JobContentStore, {}),
  videoContent: T.optional(VideoContentStore, {}),
  repoContent: T.optional(RepoContentStore, {}),
  userContent: T.optional(UserContentStore, {}),
  // content end

  // footer
  footer: T.optional(FooterStore, {}),
  // threads
  postsThread: T.optional(PostsThreadStore, {}),
  videosThread: T.optional(VideosThreadStore, {}),
  reposThread: T.optional(ReposThreadStore, {}),
  wikiThread: T.optional(WikiThreadStore, {}),
  jobsThread: T.optional(JobsThreadStore, {}),
  usersThread: T.optional(UsersThreadStore, {}),
  cheatsheetThread: T.optional(CheatsheetThreadStore, {}),

  tagsBar: T.optional(TagsBarStore, {}),
  userLister: T.optional(UserListerStore, {}),
  informer: T.optional(InformerStore, {}),
  girlVerifier: T.optional(GirlVerifierStore, {}),
  cashier: T.optional(CashierStore, {}),
  articleAuthorCard: T.optional(ArticleAuthorCardStore, {}),
  communitySetter: T.optional(CommunitySetterStore, {}),

  articleViewerHeader: T.optional(ArticleViewerHeader, {}),
  articleBodyHeader: T.optional(ArticleBodyHeaderStore, {}),
  // viewers (for drawer usage)
  postViewer: T.optional(PostViewerStore, {}),
  jobViewer: T.optional(JobViewerStore, {}),
  videoViewer: T.optional(VideoViewerStore, {}),
  repoViewer: T.optional(RepoViewerStore, {}),
  mailsViewer: T.optional(MailsViewerStore, {}),

  // user page
  userPublished: T.optional(UserPublishedStore, {}),
  userPublishedComments: T.optional(UserPublishedCommentsStore, {}),
  userBilling: T.optional(UserBillingStore, {}),
  userSettings: T.optional(UserSettingsStore, {}),
  userStared: T.optional(UserStaredStore, {}),
  userFavorited: T.optional(UserFavoritedStore, {}),
  favoritesCats: T.optional(FavoritesCatsStore, {}),

  // have a drink
  meetupsContent: T.optional(MeetupsContentStore, {}),
  haveADrinkContent: T.optional(HaveADrinkContentStore, {}),
  coolGuideContent: T.optional(CoolGuideContentStore, {}),

  // GEN: PLUG SUBSTORE TO ROOTSTORE
  articleEditor: T.optional(ArticleEditorStore, {}),
  worksEditor: T.optional(WorksEditorStore, {}),
  userProfile: T.optional(UserProfileStore, {}),
  upgradeContent: T.optional(UpgradeContentStore, {}),
  articleFooter: T.optional(ArticleFooterStore, {}),
  articleSticker: T.optional(ArticleStickerStore, {}),
  modeLineMenu: T.optional(ModeLineMenuStore, {}),
  modeLine: T.optional(ModeLineStore, {}),
  friendsContent: T.optional(FriendsContentStore, {}),
  subscribeContent: T.optional(SubscribeContentStore, {}),
  recipesContent: T.optional(RecipesContentStore, {}),
  sponsorContent: T.optional(SponsorContentStore, {}),
  joinModal: T.optional(JoinModalStore, {}),
  trendingContent: T.optional(TrendingContentStore, {}),
  worksContent: T.optional(WorksContentStore, {}),
  c11NSettingPanel: T.optional(C11NSettingPanelStore, {}),
  roadmapThread: T.optional(RoadmapThreadStore, {}),
})
  .views((self) => ({
    get isOnline() {
      return self.globalLayout.online
    },
    get isMobile() {
      return self.globalLayout.isMobile
    },
    get doraemonVisible() {
      // TODO self.doraemon.visible
      return self.doraemon.visible
    },
    get viewingData() {
      return self.viewing.viewingData
    },
    get viewingArticle() {
      const { viewing } = self
      const { activeThread } = viewing

      return viewing[activeThread]
    },
    get curRoute() {
      return self.route.curRoute
    },
    get accountInfo() {
      return self.account.accountInfo
    },
  }))
  .actions((self) => ({
    markRoute(query, opt) {
      self.route.markRoute(query, opt)
    },
    showTopModeline(bool) {
      self.modeLine.showTopBar(bool)
    },
    openDoraemon() {
      self.doraemon.open()
    },
    closeDrawer() {
      self.drawer.close()
    },
    changeTheme(name) {
      self.theme.changeTheme(name)
    },
    setViewing(sobj) {
      self.viewing.setViewing(sobj)
    },
    updateViewingIfNeed(type, sobj) {
      self.viewing.updateViewingIfNeed(type, sobj)
    },
    upgradeHelper() {
      self.upgradePackages.upgradeHelper()
    },
    sponsorHepler() {
      self.footer.sponsorHepler()
    },
    cashierHelper(opt) {
      self.upgradePackages.close()
      self.footer.closeSponsor()
      self.cashier.callCashier(opt)
    },
    toast(type, options = {}) {
      const themeData = themeSkins[self.theme.curTheme]
      const progressBarColor = toastBarColor(type, themeData)

      const toastOpt = merge(options, { progressBarColor })
      toast[type](toastOpt)
    },
    authWarning(options = {}) {
      const defaultOpt = {
        position: 'topCenter',
        title: '当前账号未登录',
        msg: '暂不支持匿名操作，请登录后再次尝试.',
      }

      if (options?.hideToast === true) {
        // pass
      } else {
        self.toast('warn', merge(defaultOpt, options))
      }

      send(EVENT.LOGIN_PANEL)
      return false
    },
    changesetErr(options) {
      self.toast('error', options)
    },
    callInformer() {
      self.informer.show()
    },
    callGirlVerifier() {
      self.girlVerifier.show()
    },
    updateC11N(options) {
      self.account.updateC11N(options)
    },
    isMemberOf(type) {
      return self.account.isMemberOf(type)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default rootStore
