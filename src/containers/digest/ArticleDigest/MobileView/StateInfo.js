import React from 'react'

import { ICON } from '@/config'

import ImgFallback from '@/components/ImgFallback'
import { Space } from '@/components/Common'
import {
  Wrapper,
  Section,
  Item,
  Text,
  ViewdIcon,
  ViewsText,
  LikeIcon,
  CommentIcon,
  Divider,
  AuthorWrapper,
  Avatar,
  Nickname,
} from '../styles/mobile_view/state_info'

const StateInfo = ({ article, author }) => {
  const { views, starredCount, commentsCount, viewerHasStarred } = article

  return (
    <Wrapper>
      <Section>
        <Item>
          <ViewdIcon src={`${ICON}/article/viewed.svg`} />
          <ViewsText>{views}</ViewsText>
        </Item>
        <Space right={10} />
        <Item>
          <CommentIcon src={`${ICON}/article/comment.svg`} />
          <Text>{commentsCount}</Text>
        </Item>
        <Divider />
        <Item>
          {viewerHasStarred ? (
            <LikeIcon src={`${ICON}/article/heart-solid.svg`} red />
          ) : (
            <LikeIcon src={`${ICON}/article/heart.svg`} />
          )}
          <Text>{starredCount}</Text>
        </Item>
      </Section>
      <AuthorWrapper>
        <Avatar
          src={`${author.avatar}`}
          fallback={<ImgFallback user={author} size={14} />}
        />
        <Nickname>{author.nickname}</Nickname>
      </AuthorWrapper>
    </Wrapper>
  )
}

export default React.memo(StateInfo)
