import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, ArrowForwardIcon, useWalletModal } from 'kebabfinance-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
// import useI18n from 'hooks/useI18n'

const StyledUnlockWalletCard = styled(Card)`
  display: none;

  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 242px;
    width: 100%;
    background-color: #ffc145;
    margin-left: auto;
    margin-right: auto;
    overflow: visible;
    margin-bottom: 30px;
  }
`
const CardImage = styled.img`
  width: 400px;
  height: 330px;
  margin-top: 50px;
  margin-left: 15px;
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.secondaryButton};
  float: right;
  margin-top: 24px;
`
const CardDescription = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondaryButton};
  float: right;
  margin-top: 16px;
`
const StyledButton = styled(Button)`
  float: right;
  border-radius: 30px;
`

const UnlockWalletCard = () => {
  // const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <StyledUnlockWalletCard>
      <CardImage src="/images/wallet.svg" alt="wallet img" />
      <CardBody>
        <StyledButton
          variant="secondary"
          endIcon={<ArrowForwardIcon color="currentColor" />}
          onClick={onPresentConnectModal}
        >
          Unlock Wallet
        </StyledButton>
        <CardTitle>Unlock Wallet</CardTitle>
        <CardDescription>There is a text about unlock wallet</CardDescription>
      </CardBody>
    </StyledUnlockWalletCard>
  )
}

export default UnlockWalletCard
