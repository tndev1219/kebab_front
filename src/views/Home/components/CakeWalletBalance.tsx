import React from 'react'
import styled from 'styled-components'
import { Text } from 'kebabfinance-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from 'components/Card/CardValue'

const Label = styled(Text)<{ account?: string | null }>`
  font-family: 'GilroySemiBold';
  color: ${({ account, theme }) => (account ? 'white' : theme.colors.textDisabled)};
  font-size: ${({ account }) => (account ? '32px' : '16px')};
`

const CakeWalletBalance = () => {
  const TranslateString = useI18n()
  const cakeBalance = useTokenBalance(getCakeAddress())
  const { account } = useWallet()

  if (!account) {
    return <Label>{TranslateString(298, 'Locked')}</Label>
  }

  return <CardValue value={getBalanceNumber(cakeBalance)} fontSize="24px" />
}

export default CakeWalletBalance
