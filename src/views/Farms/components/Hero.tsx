import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'
// import useI18n from 'hooks/useI18n'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 214px;
  background-color: #11a373;
  overflow: visible;
  margin-top: 60px;
  margin-bottom: 35px;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: space-between;
    margin-top: 110px;
  }
`
const StyledCardBody = styled(CardBody)`
  padding-left: 61px;
`
const CardImage = styled.img`
  display: none;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
    width: 292px;
    height: 295px;
    margin-top: -40px;
    margin-right: 18px;
  }
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 48px;
  color: white;
`
const CardDescription = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  color: white;
  margin-top: 16px;
`

const Hero = () => {
  // const TranslateString = useI18n()

  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>Farming</CardTitle>
        <CardDescription>Stake LP tokens to earn KEBAB</CardDescription>
      </StyledCardBody>
      <CardImage src="/images/farms/farmer.png" alt="farmer img" />
    </StyledCard>
  )
}

export default Hero
