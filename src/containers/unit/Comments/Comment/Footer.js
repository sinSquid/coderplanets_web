import React from 'react'
import TimeAgo from 'timeago-react'

import { SpaceGrow } from '@/components/Common'
import DotDivider from '@/components/DotDivider'

import Actions from './Actions'

import { Wrapper, PublishDateWrapper } from '../styles/comment/footer'

const Footer = ({ data, accountInfo }) => (
  <Wrapper>
    <PublishDateWrapper>
      <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
    </PublishDateWrapper>
    <DotDivider radius={3} space={6} />
    <Actions data={data} accountInfo={accountInfo} />
    <SpaceGrow />
  </Wrapper>
)

export default React.memo(Footer)
