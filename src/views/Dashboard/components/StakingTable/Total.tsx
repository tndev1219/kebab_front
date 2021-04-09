import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js'
import { usePriceBusd, usePriceCakeBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'

export interface TotalProps {
  symbol: string
  stakedBalance: BigNumber
  earned: number
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: ${({ theme }) => theme.colors.textSubtle};
      }
    }
  }
`

const SupplyWrapper = styled.div`
  min-width: 60px;
  text-align: left;
`

const Total: React.FC<TotalProps> = ({
  symbol, stakedBalance, earned
}) => {
  const TranslateString = useI18n()
  const price = usePriceBusd(symbol)
  const kebabPrice = usePriceCakeBusd()

  return <Container>
    {stakedBalance ? (
      <>
        <SupplyWrapper>{(getBalanceNumber(stakedBalance.multipliedBy(price)) * earned + getBalanceNumber(stakedBalance.multipliedBy(kebabPrice))).toFixed(8)}</SupplyWrapper>
      </>
    ) : (
      <SupplyWrapper>{TranslateString(656, 'Loading...')}</SupplyWrapper>
    )}
  </Container>
}

export default Total
