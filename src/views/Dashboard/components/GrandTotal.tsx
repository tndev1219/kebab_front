import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { useDashboard } from 'state/hooks'
import { getDisplayBalanceUsd } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import { isNumber } from 'lodash'

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
  font-weight: bold;
  font-size: 20px;
`

const GrandTotal: React.FC = () => {
  const TranslateString = useI18n()
  const total = getDisplayBalanceUsd(new BigNumber(useDashboard()))

  return isNumber(total) ? <Container>
    {total ? (
      <>
        <SupplyWrapper>Grand Total: {total}</SupplyWrapper>
      </>
    ) : (
      <SupplyWrapper>{TranslateString(656, 'Loading...')}</SupplyWrapper>
    )}
  </Container> :<Container>
    <SupplyWrapper>Grand Total: {total}</SupplyWrapper>
  </Container>
}

export default GrandTotal
