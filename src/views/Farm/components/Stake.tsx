import React, { useCallback, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Contract } from 'web3-eth-contract'
import { Button, IconButton, useModal, AddIcon, Card, CardBody, useWalletModal } from 'kebabfinance-uikit'
import { useApprove } from 'hooks/useApprove'
import useStake from 'hooks/useStake'
import useI18n from 'hooks/useI18n'
import useUnstake from 'hooks/useUnstake'
import { getBalanceNumber } from 'utils/formatBalance'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import Value from './Value'

interface StakeProps {
  lpContract: Contract
  pid: number
  tokenName: string
  allowance: BigNumber
  tokenBalance: BigNumber
  stakedBalance: BigNumber
}

const StyledCardContentInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Image = styled.img`
  width: 76px;
  height: 76px;
  margin-top: 14px;
  margin-bottom: 27px;
`
const Label = styled.div`
  font-family: GilroySemiBold;
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  margin-top: 8px;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 38px;
  margin-bottom: 14px;
`
const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const Stake: React.FC<StakeProps> = ({ lpContract, pid, tokenName, allowance, tokenBalance, stakedBalance }) => {
  const { account, connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)
  const [requestedApproval, setRequestedApproval] = useState(false)
  const TranslateString = useI18n()

  const { onApprove } = useApprove(lpContract, pid)
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)

  const [onPresentDeposit] = useModal(<DepositModal max={tokenBalance} onConfirm={onStake} tokenName={tokenName} />)
  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={tokenName} />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  const farmImage = tokenName.split(' ')[0].toLocaleLowerCase()
  const isAllowed = account && allowance && allowance.isGreaterThan(0)

  return (
    <Card>
      <CardBody>
        <StyledCardContentInner>
          <StyledCardHeader>
            <Image src={`/images/farms/${farmImage}.png`} alt={`${tokenName} logo`} />
            <Value
              value={getBalanceNumber(stakedBalance)}
              decimals={tokenName === 'HARD' ? 6 : undefined}
              fontSize="32px"
            />
            <Label>{`${tokenName} ${TranslateString(332, 'Tokens Staked')}`}</Label>
          </StyledCardHeader>
          <StyledCardActions>
            {!account && <Button onClick={onPresentConnectModal}>{TranslateString(292, 'Unlock Wallet')}</Button>}
            {account &&
              (isAllowed ? (
                <>
                  <Button disabled={stakedBalance.eq(new BigNumber(0))} onClick={onPresentWithdraw}>
                    {TranslateString(292, 'Unstake')}
                  </Button>
                  <StyledActionSpacer />
                  <IconButton onClick={onPresentDeposit}>
                    <AddIcon color="background" />
                  </IconButton>
                </>
              ) : (
                <Button disabled={requestedApproval} onClick={handleApprove}>{`Approve ${tokenName}`}</Button>
              ))}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardBody>
    </Card>
  )
}

export default Stake
