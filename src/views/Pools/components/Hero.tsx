import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, BurnIcon, ChevronRightIcon } from 'kebabfinance-uikit'
import useI18n from 'hooks/useI18n'

const StyledCard = styled(Card)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 217px;
  background-color: #e46149;
  overflow: visible;
  margin-top: 60px;
  margin-bottom: 35px;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: space-between;
    margin-top: 110px;
  }
`
const StyledCardBody = styled(CardBody)`
  padding-left: 60px;
`
const CardImage = styled.img`
  display: none;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
    width: 159px;
    height: 311px;
    margin-top: -70px;
    margin-right: 64px;
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
const StyledButton = styled(Button)`
  box-shadow: none;
  margin-top: 16px;
  font-size: 14px;
  width: 120px;
`

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>{TranslateString(282, 'Ketchup?')}</CardTitle>
        <CardDescription>
          Stake KEBAB to earn new tokens. You can unstake at any time. Rewards are calculated per block.
        </CardDescription>
        <StyledButton
          variant="tertiary"
          size="sm"
          startIcon={<BurnIcon color="currentColor" style={{ width: 15 }} />}
          endIcon={<ChevronRightIcon color="currentColor" style={{ width: 8 }} />}
        >
          Burn
        </StyledButton>
      </StyledCardBody>
      <CardImage src="/images/ketchup.png" alt="ketchup img" />
    </StyledCard>
  )
}

export default Hero
