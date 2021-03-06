import styled from 'styled-components'

import Img from '@/Img'
import { theme, css } from '@/utils'

export const Wrapper = styled.div``

export const LabelItem = styled.div`
  ${css.flex('align-center')};
  color: ${theme('editor.footer')};
  &:hover {
    color: ${theme('banner.title')};
  }
`
export const LabelIcon = styled(Img)`
  fill: ${theme('editor.content')};
  ${css.size(16)};
  margin-right: 3px;

  ${LabelItem}:hover & {
    fill: ${theme('editor.footerHover')};
  }
`
export const Title = styled.div`
  ${css.flex('align-center')};
  cursor: pointer;
  font-size: 1rem;
  margin-top: 2px;
  ${LabelItem}:hover & {
    color: ${theme('editor.footerHover')};
  }
`
export const PopHint = styled.div`
  padding: 5px 8px;
  color: ${theme('thread.articleDigest')};
`
