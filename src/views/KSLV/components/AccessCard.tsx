import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 424px;
  background-color: ${({ theme }) => theme.colors.cardBackground3};
  margin-top: 25px;
  box-shadow: none;
  border-radius: 40px;

  background-image: url('/images/kslv/access.png');
  background-repeat: no-repeat;
  background-position: center left;
  background-size: cover;

  ${({ theme }) => theme.mediaQueries.md} {
    background-size: contain;
  }
`
const StyledCardBody = styled(CardBody)`
  padding-right: 40px;
  padding-left: 40px;
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 48px;
  color: #007aff;
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.kslvText};
  margin-top: 6px;
  width: 320px;
  line-height: 25px;
`

const AccessCard = () => {
  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>Accessibility</CardTitle>
        <Blurb>
          Built as a BEP-20 token on the Binance Smart Chain, you can move and trade KSLV within the BSC ecosystem with
          ease and negligible fees. Our long term goal would be to make our metal tokens widely accepted by most DeFi
          protocols so that staking and yielding with KSLV or KGLD would be just as easy as staking and gaining interest
          on your USDT or BUSD.
        </Blurb>
      </StyledCardBody>
    </StyledCard>
  )
}

export default AccessCard
