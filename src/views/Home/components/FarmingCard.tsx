import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'
// import useI18n from 'hooks/useI18n'
import { Link } from 'react-router-dom'

const StyledTradeCard = styled(Card)`
  background-color: #11a373;
  margin-left: auto;
  margin-right: auto;
  max-width: 202px;
  height: 242px;
  width: 100%;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
  }
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-top: 14px;
  margin-left: 7px;
`
const CardImage = styled.img`
  position: absolute;
  bottom: 0px;
  right: -25px;
`

const TradeCard = () => {
  // const TranslateString = useI18n()

  return (
    <StyledTradeCard>
      <Link to="/farms">
        <CardBody>
          <CardTitle>Farming</CardTitle>
          <CardImage src="/images/farming_bg.svg" alt="farming btn" />
        </CardBody>
      </Link>
    </StyledTradeCard>
  )
}

export default TradeCard
