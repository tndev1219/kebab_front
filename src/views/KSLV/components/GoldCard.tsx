import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, ArrowForwardIcon } from 'kebabfinance-uikit'

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  height: 182px;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 50px;
  box-shadow: none;
  border-radius: 40px;

  background-image: url('/images/kslv/gold.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
const StyledCardBody = styled(CardBody)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 12px;
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 32px;
  color: #f0d221;
`
const Value = styled.div`
  text-align: left;
`
const Price = styled(Heading).attrs({ size: 'lg' })`
  font-size: 32px;
  color: #f0d221;
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  color: #f0d221;
  margin-top: 5px;
`
const StyledButton = styled(Button)`
  border: 2px solid #f0d221;
  border-radius: 30px;
  color: #f0d221;
`

const GoldCard = () => {
  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>Gold</CardTitle>
        <Value>
          <Price>$1830.88</Price>
          <Blurb>Gold gr Buy Price</Blurb>
        </Value>
        <StyledButton variant="secondary" size="sm" endIcon={<ArrowForwardIcon color="currentColor" />}>
          Trade Gold
        </StyledButton>
      </StyledCardBody>
    </StyledCard>
  )
}

export default GoldCard
