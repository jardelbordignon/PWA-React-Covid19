import React, { memo } from 'react'

import { Card as MCard } from '../../../components/Card'

import { CardContentStyled, Value, Label } from './style'

function Card({ value, label, color }) {

  return (
    <MCard>
      <CardContentStyled color={color}>
        <Value>{value}</Value>
        <Label>{label}</Label>
      </CardContentStyled>
    </MCard>
  )
}

export default memo(Card)