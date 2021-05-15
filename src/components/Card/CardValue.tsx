import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'

import styled from 'styled-components'

interface CardValueProps {
  value: number
  decimals?: number
  fontSize?: string
  color?: string
}

const StyledCardValue = styled.div<{ color: string }>`
  font-weight: 700;
  color: ${({ color }) => color};
`

const CardValue: React.FC<CardValueProps> = ({ value, decimals, fontSize = '40px', color = 'white' }) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
    <StyledCardValue style={{ fontSize }} color={color}>
      {countUp}
    </StyledCardValue>
  )
}

export default CardValue
