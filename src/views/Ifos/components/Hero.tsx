import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'
import useI18n from 'hooks/useI18n'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 214px;
  background-color: #404040;
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
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 48px;
  color: white;
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  color: white;
  margin-top: 16px;
`
const Image = styled.img`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
    width: 258px;
    height: 291px;
    margin-top: -40px;
    margin-right: 33px;
  }
`
const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>{TranslateString(500, 'IFO: Initial Farm Offerings')}</CardTitle>
        <Blurb>{TranslateString(502, 'Buy new tokens with a brand new token sale model.')}</Blurb>
      </StyledCardBody>
      <Image src="/images/ifos/ifo-kebab.png" alt="ifo kebab" />
    </StyledCard>
  )
}

export default Hero
