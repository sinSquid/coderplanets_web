import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
`
export const LeftPart = styled.div`
  flex-grow: 1;
  width: 100%;
  background: ${theme('content.bg')};
  border-radius: 6px;

  padding-top: 15px;
  padding-left: 25px;
  padding-right: 24px;
`
export const RightPart = styled.div`
  min-width: 200px;
  padding-top: 20px;
  margin-left: 40px;

  ${css.media.tablet`display: none;`};
`
export const PublisherWrapper = styled.div`
  width: 160px;
  max-width: 180px;
  margin-left: 8%;
`
export const FilterWrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 10px;
  ${css.media.mobile`margin-bottom: 4px;`};
  margin-left: -5px;
`
export const StickyHolder = styled.div`
  /* align the footer */
  height: 35px;
`
