import React from 'react'
import { Button, useWalletModal, ArrowForwardIcon } from 'kebabfinance-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <Button
      {...props}
      variant="tertiary"
      endIcon={<ArrowForwardIcon color="currentColor" />}
      onClick={onPresentConnectModal}
    >
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
