import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, ArrowForwardIcon } from 'kebabfinance-uikit'
import { usePriceSilver } from '../../../state/hooks'

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  height: 240px;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: 25px;
  box-shadow: none;
  border-radius: 40px;
  text-align: center;

  background-image: url('/images/kslv/silver.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 182px;
  }
`
const StyledCardBody = styled(CardBody)`
  display: block;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 12px;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
  }
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  color: #f5f5f7;
  font-size: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 34px;
  }
`
const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Value = styled.div`
  margin-top: 15px;
  padding: 0 10px;
`
const Price = styled(Heading).attrs({ size: 'lg' })`
  font-size: 34px;
  color: #f5f5f7;
`
const Blurb = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  color: #f5f5f7;
  margin-top: 5px;
  font-weight: 200;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-weight: 600;
  }
`
const StyledButton = styled(Button)`
  border: 2px solid #f5f5f7;
  border-radius: 30px;
  color: #f5f5f7;
  margin-top: 20px;
  font-size: 14px;
  height: 33px;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0px;
    font-size: 16px;
    height: 36px;
  }
`

const SilverCard = () => {
  const silverPriceGram = usePriceSilver().toNumber().toFixed(3)
  const silverPriceOz = (31.1035 * (usePriceSilver().toNumber())).toFixed(2)
  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>Silver</CardTitle>
        <PriceWrapper>
          <Value>
            <Price>${silverPriceGram}</Price>
            <Blurb>1 gram</Blurb>
          </Value>
          <Value>
            <Price>${silverPriceOz}</Price>
            <Blurb>1 troy oz</Blurb>
          </Value>
        </PriceWrapper>
        <a href="https://swap.kebabfinance.com/#/swap?exactAmount=31.1&exactField=output&inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x58b8e295fc5b705bcbb48c5978b2b389332e0414">
          <StyledButton variant="secondary" size="sm" endIcon={<ArrowForwardIcon color="currentColor" />}>
            Trade Silver
          </StyledButton>
        </a>
      </StyledCardBody>
    </StyledCard>
  )
}

export default SilverCard
