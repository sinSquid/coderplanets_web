import React from 'react'

import { ICON_CMD } from '../../config'

import { FocusLine } from '../../components'
import { Wrapper, Title } from './styles/achieve_card'
import CommunityEditorInfo from './CommunityEditorInfo'

const AchieveCard = ({ user }) => (
  <Wrapper>
    <Title>个人成就</Title>
    <FocusLine
      before="共获得"
      iconSrc={`${ICON_CMD}/likev2.svg`}
      focus={user.achievement.contentsStaredCount}
      after="次赞"
    />
    <FocusLine
      before="创作的内容被收藏"
      iconSrc={`${ICON_CMD}/favoritev2.svg`}
      focus={user.achievement.contentsFavoritedCount}
      after="次"
    />

    <CommunityEditorInfo user={user} />
  </Wrapper>
)

export default AchieveCard
