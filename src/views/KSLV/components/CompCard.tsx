import React from 'react'
import styled from 'styled-components'
import { Card, Heading, CardBody } from 'kebabfinance-uikit'

const StyledCard = styled(Card)`
  display: block;
  align-items: center;
  background-color: #000000;
  box-shadow: none;
  height: 520px;
  border-radius: 40px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    height: 423px;
    max-width: 370px;
  }
`
const StyledCardBody = styled(CardBody)`
  padding: 42px 24px 0px 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
`
const Image = styled.img`
  width: 311px;
  margin: auto;
  display: flex;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 100%;
  }
`

const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 34px;
  color: #BF5AF2;
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 14px;
  line-height: 16px;
  color: white;
  margin-top: 6px;
`

const CompCard = () => {
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
      <Image src="/images/kslv/comp.png" alt="comp" />
    </StyledCard>
  )
}

export default CompCard
