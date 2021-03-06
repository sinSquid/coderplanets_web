import styled from 'styled-components'

import Img from '@/Img'
import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};

  ${css.media.mobile`
    display: none;
  `}
`
export const Icon = styled(Img)`
  fill: ${({ active }) =>
    active === 1 ? theme('tabs.headerActive') : theme('tabs.header')};

  ${css.size(15)};
  margin-right: 5px;

  ${css.media.mobile`
    ${css.size(13)};
  `}
`
