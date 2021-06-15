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
  color: #34c759;
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.kslvText};
  margin-top: 6px;
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
