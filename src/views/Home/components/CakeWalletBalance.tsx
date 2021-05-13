import React from 'react'
import styled from 'styled-components'
import { Text } from 'kebabfinance-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from 'components/Card/CardValue'

const Label = styled(Text)`
  font-family: 'GilroySemiBold';
  color: ${({ theme }) => theme.colors.textDsc};
  font-size: 16px;
`

const CakeWalletBalance = () => {
  const TranslateString = useI18n()
  const cakeBalance = useTokenBalance(getCakeAddress())
  const { account } = useWallet()

  if (!account) {
    return <Label>{TranslateString(298, 'Locked')}</Label>
  }

  return <CardValue value={getBalanceNumber(cakeBalance)} fontSize="32px" />
}

export default CakeWalletBalance
