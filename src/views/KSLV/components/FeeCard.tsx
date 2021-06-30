import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'

const StyledCard = styled(Card)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.cardBackground3};
  box-shadow: none;
  height: 280px;
  margin: auto;
  border-radius: 40px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 423px;
    max-width: 370px;
    align-items: center;
  }
`
const StyledCardBody = styled(CardBody)`
  padding: 42px 32px 0px 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 32px;
  }
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 34px;
  color: #34c759;

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

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`

const FeeCard = () => {
  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>Storage Fees</CardTitle>
        <Blurb>
          Our metal tokens would decay in real-time to account for <a href="https://docs.kebabfinance.com/kebab-documentation/silver/why/storage-fees">the costs of moving and storing</a> all our physical
          metals. For KSLV this will be at a rate of 0.005479151% daily, or about 2% yearly. This rate of decay would
          differ for various types of metals as the cost for the storage of different metals also varies in price.
        </Blurb>
      </StyledCardBody>
    </StyledCard>
  )
}

export default FeeCard
