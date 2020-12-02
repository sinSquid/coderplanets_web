import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
  color: ${theme('thread.articleDigest')};
  width: 100%;
`
export const Block = styled.div`
  ${css.flexColumn('justify-between')};
  width: 33%;
  height: 280px;
  border: 1px solid;
  border-left: none;
  border-right: ${({ borderRight }) => (borderRight ? '1px solid' : 'none')};
  border-top: ${({ borderTop }) => (borderTop ? '1px solid' : 'none')};
  border-color: #0d4353;
  padding: 15px;
  padding-left: 24px;

  :last-child {
    border-right: none;
  }
  &:hover {
    background: #04313e;
    border-color: #074c61;
  }
  transition: all 0.25s;
`
export const Header = styled.div`
  ${css.flexColumn()};
`
export const LinkHead = styled.div`
  ${css.flex('align-center', 'justify-between')};
  font-size: 12px;
  margin-bottom: 15px;
`
export const NationsWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 5px;
  opacity: 0.8;
  ${Block}:hover & {
    opacity: 1;
  }
  transition: all 0.25s;
`
export const NationFlag = styled(Img)`
  width: 16px;
  display: block;
  border-radius: 3px;
  margin-right: ${({ marginRight }) => (marginRight ? '5px' : '0')};
`
export const IntroHead = styled.div`
  ${css.flex('align-center')};
  &:hover {
    cursor: pointer;
  }
`
export const Icon = styled(Img)`
  ${css.circle(60)};
`
export const BasicInfo = styled.div`
  ${css.flexColumn()};
  margin-left: 14px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  cursor: pointer;
  ${css.cutFrom('200px')};
`
export const AKA = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
  opacity: 0.8;
  margin-bottom: 4px;
`
export const Birthday = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  height: 65px;
  opacity: 0.9;
  cursor: pointer;

  ${Block}:hover & {
    color: ${theme('thread.articleTitle')};
    opacity: 1;
  }
  transition: all 0.25s;
`
export const Footer = styled.div`
  ${css.flex('align-center', 'justify-between')};
  &:hover {
    cursor: pointer;
  }
`
export const VoteInfo = styled.div`
  ${css.flex('align-center')};
`
export const ViewInfo = styled(VoteInfo)`
  opacity: 0.8;

  ${Block}:hover & {
    opacity: 1;
  }
`
const FooterIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(16)};
`
export const UpVoteIcon = styled(FooterIcon)`
  ${css.size(12)};
  margin-top: -1px;
`
export const ViewIcon = styled(FooterIcon)`
  margin-top: -2px;
`
export const Number = styled.div`
  font-size: 12px;
  margin-left: 5px;
`

export const MoreIcon = styled(Img)`
  ${css.size(16)};
  fill: ${theme('thread.articleDigest')};
`
