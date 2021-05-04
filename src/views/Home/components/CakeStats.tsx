import React from 'react'
import { Card, CardBody, Heading, Text, Skeleton, ArrowForwardIcon } from 'kebabfinance-uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd, usePriceBtcbBusd } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from 'components/Card/CardValue'
import { QuoteToken } from 'config/constants/types'
import BigNumber from 'bignumber.js'

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.cardBackground3};
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
  }
`
const StyleCardBody = styled(CardBody)`
  margin-top: 14px;
  margin-left: 7px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 50%;
  }
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`
const Title = styled(Heading)`
  font-family: 'GilroyMedium';
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
`
const StyledText = styled(Text)`
  font-family: 'GilroySemiBold';
  display: flex;
  align-items: center;
`
const StyledIcon = styled(ArrowForwardIcon)`
  background-color: #e46149;
  border-radius: 50px;
  fill: ${({ theme }) => theme.colors.cardBackground3};
  margin-right: 13px;
`
const TotalValue = styled(Heading)`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 24px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0

  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const btcPrice = usePriceBtcbBusd()

  let tvl = new BigNumber(0)
  for (let i = 0; i < farmsLP.length; i++) {
    const farm = farmsLP[i]
    if (!farm.lpTotalInQuoteToken) {
      //
    } else if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      tvl = tvl.plus(new BigNumber(farm.lpTotalInQuoteToken).div(bnbPrice))
    } else if (farm.quoteTokenSymbol === QuoteToken.KEBAB) {
      tvl = tvl.plus(cakePrice.times(farm.lpTotalInQuoteToken))
    } else if (farm.quoteTokenSymbol === QuoteToken.BTCB) {
      tvl = tvl.plus(btcPrice.times(farm.lpTotalInQuoteToken))
    } else {
      tvl = tvl.plus(farm.lpTotalInQuoteToken)
    }
  }
  const total = (Math.round(tvl.toNumber() * 100) / 100).toLocaleString()

  return (
    <StyledCard>
      <StyleCardBody>
        <Title>{TranslateString(534, 'Kebab Stats')}</Title>
        <Row>
          <StyledText>
            <StyledIcon />
            {TranslateString(536, 'Total KEBAB Supply')}
          </StyledText>
          {cakeSupply && <CardValue fontSize="16px" value={cakeSupply} />}
        </Row>
        <Row>
          <StyledText>
            <StyledIcon />
            {TranslateString(538, 'Total KEBAB Burned')}
          </StyledText>
          <CardValue fontSize="16px" value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <StyledText>
            <StyledIcon />
            {TranslateString(540, 'New KEBAB/block')}
          </StyledText>
          <CardValue fontSize="16px" decimals={0} value={1} />
        </Row>
      </StyleCardBody>
      <StyleCardBody>
        <Title>{TranslateString(999, 'Total Vault')}</Title>
        {total ? (
          <>
            <TotalValue>{`$${total}`}</TotalValue>
            <Text color="primary" style={{ fontFamily: 'GilroySemiBold' }}>
              {TranslateString(999, 'Across all farming pairs and stakings')}
            </Text>
          </>
        ) : (
          <>
            <Skeleton height={66} />
          </>
        )}
      </StyleCardBody>
    </StyledCard>
  )
}

export default CakeStats
