/*
 *
 * Footer
 *
 */

import React from 'react'
import dynamic from 'next/dynamic'

import { connectStore, buildLog } from '@/utils'

import JoinModal from '@/containers/JoinModal'
import Modal from '@/components/Modal'

import BriefView from './BriefView'
import DigestView from './DigestView'
import BussinessNote from './BussinessNote'

import { Wrapper } from './styles'
import {
  useInit,
  toggleSponsorHelper,
  toggleBusBanner,
  onLogin,
  onPay,
} from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Footer')

const DynamicBuyMeChuanChuan = dynamic({
  loader: () => import('@/components/BuyMeChuanChuan'),
  /* eslint-disable */
  loading: () => <div />,
  /* eslint-enable */
})

const FooterContainer = ({ footer }) => {
  useInit(footer)

  const {
    showSponsor,
    showBusBanner,
    curView,
    accountInfo,
    hasTopBorder,
  } = footer

  return (
    <Wrapper data-testid="footer">
      <Modal show={showBusBanner} showCloseBtn onClose={toggleBusBanner}>
        <BussinessNote />
      </Modal>

      <JoinModal />

      <DynamicBuyMeChuanChuan
        show={showSponsor}
        accountInfo={accountInfo}
        onClose={toggleSponsorHelper}
        onLogin={onLogin}
        onPay={onPay}
      />

      {curView === 'DIGEST' ? (
        <DigestView hasTopBorder={hasTopBorder} />
      ) : (
        <BriefView />
      )}
    </Wrapper>
  )
}

export default connectStore(FooterContainer)
