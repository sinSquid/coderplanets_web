/*
 * Tabber
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import NormalView from './NormalView'
import BriefView from './BriefView'

import { mapAlias } from './alias'

import { makeDebugger, THREAD, C11N } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:Tabber:index')
/* eslint-enable no-unused-vars */

const Tabber = ({ source, active, onChange, layout, communityRaw }) => {
  const aliasSource = mapAlias(source, communityRaw)
  const sortedSource = R.sort((a, b) => a.index - b.index, aliasSource)

  return (
    <React.Fragment>
      {layout === C11N.DIGEST ? (
        <NormalView source={sortedSource} active={active} onChange={onChange} />
      ) : (
        <BriefView source={sortedSource} active={active} onChange={onChange} />
      )}
    </React.Fragment>
  )
}

Tabber.propTypes = {
  onChange: PropTypes.func,
  source: PropTypes.array.isRequired,
  active: PropTypes.string,
  layout: PropTypes.oneOf([C11N.DIGEST, C11N.BRIEF]),
  communityRaw: PropTypes.string,
}

Tabber.defaultProps = {
  active: THREAD.POST,
  onChange: debug,
  layout: C11N.DIGEST,
  communityRaw: 'home',
}

export default React.memo(Tabber)
