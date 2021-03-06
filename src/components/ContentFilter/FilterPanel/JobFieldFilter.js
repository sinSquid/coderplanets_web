import React from 'react'

import { LABEL_POOL } from '@/config'

import {
  ColumnWrapper,
  SelectLabel,
  LabelDivider,
  SelectIcon,
  SelectTitle,
  LeftAlignWrapper,
  SelectItem,
} from '../styles'

// import { uid } from '@/utils'

const JobFieldFilter = ({ activeFilter, onSelect }) => (
  <ColumnWrapper>
    <SelectLabel>
      <SelectIcon src={LABEL_POOL.field.iconSrc} />
      <SelectTitle>领域</SelectTitle>
    </SelectLabel>
    <LabelDivider />
    <LeftAlignWrapper>
      {LABEL_POOL.field.data.map((item) => (
        <SelectItem
          key={item}
          active={activeFilter.field === item}
          onClick={() => onSelect({ field: item })}
        >
          {item}
        </SelectItem>
      ))}
    </LeftAlignWrapper>
  </ColumnWrapper>
)

export default React.memo(JobFieldFilter)
