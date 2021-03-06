import React from 'react'

import { ICON } from '@/config'
import { useDevice } from '@/hooks'

import {
  Wrapper,
  ArrowWrapper,
  Icon,
  NaviInfo,
  Navi,
  Hint,
} from '../styles/next/bottom'

const Bottom = ({ disabled, pageNumber, onChange }) => {
  const { isMobile } = useDevice()

  const iconSrc = !isMobile
    ? `${ICON}/shape/arrow.svg`
    : `${ICON}/shape/arrow-simple.svg`

  return (
    <>
      {disabled ? (
        <Wrapper disabled>
          <NaviInfo disabled>
            <Hint>第 {pageNumber} 页</Hint>
            <Navi>下一页</Navi>
          </NaviInfo>
          <ArrowWrapper>
            <Icon src={iconSrc} />
          </ArrowWrapper>
        </Wrapper>
      ) : (
        <Wrapper onClick={() => onChange(pageNumber + 1)}>
          <NaviInfo>
            <Hint>第 {pageNumber + 1} 页</Hint>
            <Navi>下一页</Navi>
          </NaviInfo>
          <ArrowWrapper>
            <Icon src={iconSrc} />
          </ArrowWrapper>
        </Wrapper>
      )}
    </>
  )
}

export default React.memo(Bottom)
