import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 40px;
  min-height: 150px;
  max-width: 180px;
`
export const Header = styled.div`
  ${css.flex('justify-between', 'align-end')};
  align-items: center;
  margin-bottom: 12px;
`
export const Title = styled.div`
  color: ${theme('thread.articleDigest')};
  border-top: 1px solid;
  border-top-color: ${theme('thread.articleSpliter')};
  padding-top: 15px;
  width: 80px;

  ${Wrapper}:hover & {
    width: 100%;
  }

  transition: width 0.3s;
  transition-delay: 0.2s;
`
export const AboutIcon = styled(Img)`
  ${css.size(14)};
  fill: ${theme('thread.articleDigest')};
  opacity: 0;
  margin-top: 16px;

  &:hover {
    fill: ${theme('banner.title')};
    cursor: pointer;
  }

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: all 0.2s;
  transition-delay: 0.2s;
`
