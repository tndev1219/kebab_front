import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js'
import { usePriceBusd, usePriceCakeBusd } from 'state/hooks'
import { getBalanceNumber, getDisplayBalanceUsd } from 'utils/formatBalance'
import { setPoolsTotalData } from 'state/dashboard'

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

const Total: React.FC<TotalProps> = ({ symbol, stakedBalance, earned }) => {
  const dispatch = useDispatch()
  const TranslateString = useI18n()
  const price = usePriceBusd(symbol)
  const kebabPrice = usePriceCakeBusd()
  const value = getBalanceNumber(stakedBalance.multipliedBy(kebabPrice).plus(price.multipliedBy(new BigNumber(earned))))
  const displayValue = getDisplayBalanceUsd(new BigNumber(value))

  useEffect(() => {
    dispatch(setPoolsTotalData({ symbol, value }))
  }, [dispatch, symbol, value])

  return (
    <Container>
      {stakedBalance ? (
        <>
          <SupplyWrapper>{displayValue}</SupplyWrapper>
        </>
      ) : (
        <SupplyWrapper>{TranslateString(656, 'Loading...')}</SupplyWrapper>
      )}
    </Container>
  )
}

export default Total
