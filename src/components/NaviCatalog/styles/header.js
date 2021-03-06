import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-center', 'justify-between')}
  width: 100%;
  margin-bottom: 8px;
`
export const Title = styled.div`
  position: relative;
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  padding-left: 5px;

  &:before {
    content: '';
    width: 6px;
    height: 6px;
    background: #00999d;
    position: absolute;
    left: -10px;
    top: 8px;
    border-radius: 50%;
    display: ${({ active }) => (active ? 'block' : 'none')};
  }
`
export const OperatorsWrapper = styled.div`
  ${css.flex('align-center')};
`
export const Operator = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-left: 6px;
`
export const OperateIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(13)};

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const LocateIcon = styled(OperateIcon)``
export const HomeIcon = styled(OperateIcon)``

export const ResetIcon = styled(Img)`
  fill: ${theme('thread.articleDigest')};
  ${css.size(14)};

  &:hover {
    fill: ${theme('thread.articleTitle')};
    cursor: pointer;
  }

  transition: all 0.2s;
`
export const HelpHint = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 12px;
`
