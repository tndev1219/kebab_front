import React from 'react'
import { Button, useModal, BurnIcon } from 'kebabfinance-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import useTokenBalance from 'hooks/useTokenBalance'
import { useBurnChef } from 'hooks/useContract'
import BurnModal from 'components/BurnModal'
import BigNumber from 'bignumber.js'

import { getBalanceNumber } from 'utils/formatBalance'
import { getCakeAddress } from 'utils/addressHelpers'

const BurnButton = (props) => {
  const TranslateString = useI18n()
  const { account }: { account: string } = useWallet()
  const cakeBalance = useTokenBalance(getCakeAddress())

  const burnChefContract = useBurnChef()
  const onBurn = async (v) => {
    try {
      await burnChefContract.methods.burn(new BigNumber(v).multipliedBy(new BigNumber(10).pow(18)))
        .send({ from: account })
        .on('transactionHash', (tx) => {
          console.info('success', tx)
        })
        .on('error', (err) => {
          console.error(err)
        })
    } catch (err){
      console.error(err)
    }
  }

  const [onPresentBurn] = useModal(
    <BurnModal
      max={new BigNumber(getBalanceNumber(cakeBalance)).multipliedBy(new BigNumber(10).pow(18))}
      onConfirm={onBurn}
      tokenName='KEBAB'
    />,
  )

  return (
    <Button onClick={onPresentBurn} {...props}>
      <BurnIcon/>
      {TranslateString(292, 'Burn')}
    </Button>
  )
}

export default BurnButton
