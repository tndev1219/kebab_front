import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 420px;
  background-color: ${({ theme }) => theme.colors.cardBackground3};
  margin-top: 20px;
  box-shadow: none;
  border-radius: 40px;

  background-image: url('/images/kslv/silver-mobile.png');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: 90%;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    height: 424px;
    margin-top: 40px;
    align-items: center;
    background-image: url('/images/kslv/silver-tablet.png');
    background-size: unset;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    background-image: url('/images/kslv/silver-desktop.png');
  }
`
const StyledCardBody = styled(CardBody)`
  padding: 42px 24px 0px 32px;
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 34px;
  color: #ff2d55;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-family: 'GilroyExtraBold';
    font-size: 48px;
  }
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.kslvText};
  margin-top: 6px;
  width: 100%;
  line-height: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 300px;
    font-size: 16px;
    line-height: 24px;
  }
`

const BackedCard = () => {
  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>Backed 1:1</CardTitle>
        <Blurb>
          Our silver token is backed by a physical silver reserve in our secure vault. Owning KSLV would be as good as
          owning the underlying silver asset. Why stake USDT and other stable coins when you can do the same with a
          fully-backed tokenized appreciating asset. You can <a href="https://docs.kebabfinance.com/kebab-documentation/silver/why">swap interchangeably</a> between crypto and physical bullion at any time.
        </Blurb>
      </StyledCardBody>
    </StyledCard>
  )
}

export default BackedCard
