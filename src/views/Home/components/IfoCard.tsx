import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'
// import useI18n from 'hooks/useI18n'

const StyledTradeCard = styled(Card)`
  background-color: #404040;
  margin-left: auto;
  margin-right: auto;
  max-width: 178px;
  height: 214px;
  width: 100%;
  cursor: pointer;
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
    <a href="/#/ifo" style={{ width: '100%' }}>
      <StyledTradeCard>
        <CardBody>
          <CardTitle>IFO</CardTitle>
          <CardImage src="/images/ifo_bg.png" alt="ifo btn" />
        </CardBody>
      </StyledTradeCard>
    </a>
  )
}

export default TradeCard
