import styled from 'styled-components'

import { theme, css } from '@/utils'

import { SIDEBAR_WIDTH, SIDEBAR_EXPAND_WIDTH } from './styles/metric'

const SideBar = styled.div`
  border-right: 1px solid;
  position: fixed;
  height: 100vh;
  top: 0;
  width: ${({ open }) => (open ? SIDEBAR_EXPAND_WIDTH : SIDEBAR_WIDTH)};
  background: ${theme('sidebar.bg')};
  border-color: ${theme('sidebar.border_color')};
  z-index: ${css.zIndex.sidebar};
  overflow-y: scroll;
  overflow-x: hidden;

  transition: width 0.2s, opacity 0.8s, box-shadow 0.1s linear 0.1s,
    background-color 0.3s;
`

export default SideBar
