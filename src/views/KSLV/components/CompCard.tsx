import React from 'react'
import styled from 'styled-components'
import { Card } from 'kebabfinance-uikit'

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  background-color: #000000;
  box-shadow: none;
  height: 423px;
  border-radius: 40px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 370px;
  }
`
const Image = styled.img`
  width: 100%;
`

const CompCard = () => {
  return (
    <StyledCard>
      <Image src="/images/kslv/comp.png" alt="comp" />
    </StyledCard>
  )
}

export default CompCard
