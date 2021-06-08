import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 424px;
  background-color: ${({ theme }) => theme.colors.cardBackground3};
  margin-top: 45px;
  box-shadow: none;
  border-radius: 40px;

  background-image: url('/images/kslv/silver.svg');
  background-repeat: no-repeat;
  background-position: center right;
  background-size: cover;

  ${({ theme }) => theme.mediaQueries.md} {
    background-size: contain;
  }
`
const StyledCardBody = styled(CardBody)`
  padding-left: 40px;
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 48px;
  color: #ff2d55;
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.kslvText};
  margin-top: 6px;
  width: 300px;
  line-height: 25px;
`

const BackedCard = () => {
  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>Backed 1:1</CardTitle>
        <Blurb>
          Our silver token is backed by a physical silver reserve in our secure vault. Owning KSLV would be as good as
          owning the underlying silver asset. Why stake USDT and other stable coins when you can do the same with a
          fully-backed tokenized appreciating asset.
        </Blurb>
      </StyledCardBody>
    </StyledCard>
  )
}

export default BackedCard
