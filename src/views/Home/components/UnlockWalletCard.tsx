import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button, ArrowForwardIcon, useWalletModal } from 'kebabfinance-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
// import useI18n from 'hooks/useI18n'

const StyledUnlockWalletCard = styled(Card)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 214px;
  background-color: #ffc145;
  overflow: visible;
  margin-bottom: 64px;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: space-between;
  }
`
const StyledCardBody = styled(CardBody)`
  text-align: right;
  padding: 39px 39px 39px 0px;
`
const CardImage = styled.img`
  display: none;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
    width: 295px;
    height: 246px;
    margin-left: 16px;
  }
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.background};
  margin-top: 10px;
`
const CardDescription = styled(Heading).attrs({ size: 'lg' })`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.background};
  margin-top: 10px;
`
const StyledButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.colors.background};
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.background};
`

const UnlockWalletCard = () => {
  // const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <StyledUnlockWalletCard>
      <CardImage src="/images/wallet.png" alt="wallet img" />
      <StyledCardBody>
        <StyledButton
          variant="secondary"
          endIcon={<ArrowForwardIcon color="currentColor" />}
          onClick={onPresentConnectModal}
        >
          Unlock Wallet
        </StyledButton>
        <CardTitle>Unlock Wallet</CardTitle>
        <CardDescription>There is a text about unlock wallet</CardDescription>
      </StyledCardBody>
    </StyledUnlockWalletCard>
  )
}

export default UnlockWalletCard
