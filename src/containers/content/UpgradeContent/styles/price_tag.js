import styled from 'styled-components'
import { theme, css } from '@/utils'

import { Dashboard } from './index'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
`
export const Price = styled.div`
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : theme('thread.articleDigest')};
  font-size: 23px;
  font-weight: bold;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: 2px;

  ${Dashboard}:hover & {
    color: ${theme('thread.articleTitle')};
  }
  transition: color 0.25s;
`
export const Slash = styled.div`
  font-size: 12px;
  color: ${theme('thread.articleDigest')};
  margin-right: 2px;
  margin-top: 1px;
`
export const Unit = styled.div`
  font-size: 14px;
`
