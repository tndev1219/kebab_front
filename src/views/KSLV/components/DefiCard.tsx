import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardBackground3};
  box-shadow: none;
  height: 423px;
  margin: auto;
  border-radius: 40px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 370px;
  }
`
const StyledCardBody = styled(CardBody)`
  padding: 40px;
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 48px;
  font-weight: 700;
  color: #af52de;
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.kslvText};
  margin-top: 6px;
`

const DefiCard = () => {
  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>The Future of DeFi</CardTitle>
        <Blurb>
          Imagine a world where the adoption and demand for metal backed tokens outpaces that of stable coins. Where
          DeFi users are staking digital silver instead of USDT or BUSD. That is the long term goal of our team for this
          project.
        </Blurb>
      </StyledCardBody>
    </StyledCard>
  )
}

export default DefiCard
