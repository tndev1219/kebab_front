import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 480px;
  background-color: ${({ theme }) => theme.colors.cardBackground3};
  margin-top: 20px;
  box-shadow: none;
  border-radius: 40px;
  margin-bottom: 150px;

  background-image: url('/images/kslv/access.png');
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 130%;

  ${({ theme }) => theme.mediaQueries.sm} {
    align-items: center;
    justify-content: flex-end;
    height: 424px;
    margin-top: 40px;
    background-size: contain;
  }
`
const StyledCardBody = styled(CardBody)`
  padding: 42px 24px 42px 32px;
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 34px;
  color: #007aff;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 48px;
    font-family: GilroyExtraBold;
  }
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.kslvText};
  margin-top: 6px;
  width: 100%;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 320px;
    font-size: 16px;
    line-height: 24px;
  }
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
