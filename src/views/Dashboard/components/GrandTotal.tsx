import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import { useDashboard } from 'state/hooks'
import { getDisplayBalanceUsd } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import { isNumber } from 'lodash'
import { Button } from 'kebabfinance-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`

const SupplyWrapper = styled.div`
  min-width: 60px;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
`

const ButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0%, -50%);
  width: auto;
`

const GrandTotal: React.FC = () => {
  const TranslateString = useI18n()
  const total = getDisplayBalanceUsd(new BigNumber(useDashboard()))
  const { account }: { account: string } = useWallet()
  function visitApeBoard(e) {
    e.preventDefault();
    let url = 'https://apeboard.finance/dashboard/';
    url += account
    window.location.href = url
  }

  return isNumber(total) ? (
    <Container>
      {total ? (
        <>
          <SupplyWrapper>Grand Total: {total}</SupplyWrapper>
        </>
      ) : (
        <SupplyWrapper>{TranslateString(656, 'Loading...')}</SupplyWrapper>
      )}
    </Container>
  ) : (
    <Container>
      <SupplyWrapper>Grand Total: {total}</SupplyWrapper>
      <a href="https://swap.kebabfinance.com/#/swap?exactAmount=31.1&exactField=output&inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x58b8e295fc5b705bcbb48c5978b2b389332e0414">
        <ButtonWrapper>
          <Button size="md" onClick={visitApeBoard}>
            See on ApeBoard
          </Button>
        </ButtonWrapper>
      </a>
    </Container>
  )
}

export default GrandTotal
