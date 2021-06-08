import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, ArrowForwardIcon } from 'kebabfinance-uikit'

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  height: 182px;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 25px;
  margin-bottom: 150px;
  box-shadow: none;
  border-radius: 40px;

  background-image: url('/images/kslv/silver.png');
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
  color: #f5f5f7;
`
const Value = styled.div`
  text-align: left;
`
const Price = styled(Heading).attrs({ size: 'lg' })`
  font-size: 32px;
  color: #f5f5f7;
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  color: #f5f5f7;
  margin-top: 5px;
`
const StyledButton = styled(Button)`
  border: 2px solid #f5f5f7;
  border-radius: 30px;
  color: #f5f5f7;
`

const SilverCard = () => {
  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>Silver</CardTitle>
        <Value>
          <Price>$22.57</Price>
          <Blurb>Silver gr Buy Price</Blurb>
        </Value>
        <StyledButton variant="secondary" size="sm" endIcon={<ArrowForwardIcon color="currentColor" />}>
          Trade Silver
        </StyledButton>
      </StyledCardBody>
    </StyledCard>
  )
}

export default SilverCard
