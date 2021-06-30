import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'

const StyledCard = styled(Card)`
  display: none;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardBackground3};
  box-shadow: none;
  height: 423px;
  margin: auto;
  border-radius: 40px;
  width: 100%;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    max-width: 370px;
  }
`
const StyledCardBody = styled(CardBody)`
  padding: 32px;
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 47px;
  color: #af52de;
  font-family: 'GilroyExtraBold';
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.kslvText};
  margin-top: 6px;
`

const DefiCard = () => {
  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>Sound Tokens</CardTitle>
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
