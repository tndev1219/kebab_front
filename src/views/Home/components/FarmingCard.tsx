import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'
// import useI18n from 'hooks/useI18n'

const StyledTradeCard = styled(Card)`
  background-color: #11a373;
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
  bottom: -5px;
  right: -25px;
`

const TradeCard = () => {
  // const TranslateString = useI18n()

  return (
    <a href="/#/farms" style={{ width: '100%' }}>
      <StyledTradeCard>
        <CardBody>
          <CardTitle>Farming</CardTitle>
          <CardImage src="/images/farming_bg.svg" alt="farming btn" />
        </CardBody>
      </StyledTradeCard>
    </a>
  )
}

export default TradeCard
