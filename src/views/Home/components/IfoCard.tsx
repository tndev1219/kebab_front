import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'
// import useI18n from 'hooks/useI18n'
import { Link } from 'react-router-dom'

const StyledTradeCard = styled(Card)`
  background-color: #404040;
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
  bottom: -3px;
  right: -7px;
`

const TradeCard = () => {
  // const TranslateString = useI18n()

  return (
    <StyledTradeCard>
      <Link to="/ifo">
        <CardBody>
          <CardTitle>IFO</CardTitle>
          <CardImage src="/images/ifo_bg.png" alt="ifo btn" />
        </CardBody>
      </Link>
    </StyledTradeCard>
  )
}

export default TradeCard
