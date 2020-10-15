import styled from 'styled-components'

import { theme, css } from '@/utils'

// min-height: 300px;
export const ListsContainer = styled.div`
  ${css.flexColumn('')};
  border-radius: 4px;
`
export const TotalHeader = styled.div`
  ${css.flex('align-center')};
  margin-top: 25px;
  margin-bottom: 10px;
`
export const TotalCountWrapper = styled.div`
  flex-grow: 1;
`
export const ListTitle = styled.div`
  color: ${theme('comment.title')};
  font-size: 14px;
  margin-left: 2px;

  ${css.media.mobile`
    margin-left: 18px;
  `};
`
export const TotalNum = styled.span`
  color: ${theme('comment.number')};
  font-size: 17px;
  margin-left: 2px;
  margin-right: 2px;
`
export const CommentBlock = styled.div`
  ${css.flex()};
  margin-bottom: 16px;
  padding: 15px;
  padding-left: 20px;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border-radius: 3px;
  background: ${theme('drawer.articleBg')};
`