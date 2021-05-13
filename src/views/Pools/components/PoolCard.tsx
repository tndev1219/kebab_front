import BigNumber from 'bignumber.js'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, IconButton, useModal, AddIcon, CardBody, useWalletModal } from 'kebabfinance-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import Label from 'components/Label'
import { useERC20 } from 'hooks/useContract'
import { useSousApprove } from 'hooks/useApprove'
import useI18n from 'hooks/useI18n'
import { useSousStake } from 'hooks/useStake'
import { useSousUnstake } from 'hooks/useUnstake'
import useBlock from 'hooks/useBlock'
import { getBalanceNumber } from 'utils/formatBalance'
import { useSousHarvest } from 'hooks/useHarvest'
import Balance from 'components/Balance'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import { Pool } from 'state/types'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import CompoundModal from './CompoundModal'
import CardTitle from './CardTitle'
import CardTokenImg from './CardTokenImg'
import Card from './Card'
import OldSyrupTitle from './OldSyrupTitle'
import CardFooter from './CardFooter'

interface PoolWithApy extends Pool {
  apy: BigNumber
}

interface HarvestProps {
  pool: PoolWithApy
}

const StyledCardBody = styled(CardBody)`
  width: 100%;
  padding: 38px 31px 16px 31px;
`
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`
const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  margin-bottom: 4px;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
`
const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`
const StyledDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledLabel = styled.div<{ isDisabled: boolean }>`
  font-size: 16px;
  font-family: GilroySemiBold;
  color: ${({ isDisabled, theme }) => (isDisabled ? theme.colors.textInactive : 'currentColor')};
`

const PoolCard: React.FC<HarvestProps> = ({ pool }) => {
  const {
    sousId,
    image,
    tokenName,
    stakingTokenName,
    stakingTokenAddress,
    projectLink,
    harvest,
    apy,
    tokenDecimals,
    poolCategory,
    totalStaked,
    startBlock,
    endBlock,
    isFinished,
    userData,
    stakingLimit,
  } = pool
  // Pools using native BNB behave differently than pools using a token
  const isBnbPool = poolCategory === PoolCategory.BINANCE
  const TranslateString = useI18n()
  const stakingTokenContract = useERC20(stakingTokenAddress)
  const { account, connect, reset } = useWallet()
  const block = useBlock()
  const { onApprove } = useSousApprove(stakingTokenContract, sousId)
  const { onStake } = useSousStake(sousId, isBnbPool)
  const { onUnstake } = useSousUnstake(sousId)
  const { onReward } = useSousHarvest(sousId, isBnbPool)
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  const [requestedApproval, setRequestedApproval] = useState(false)
  const [pendingTx, setPendingTx] = useState(false)

  const allowance = new BigNumber(userData?.allowance || 0)
  const stakingTokenBalance = new BigNumber(userData?.stakingTokenBalance || 0)
  const stakedBalance = new BigNumber(userData?.stakedBalance || 0)
  const earnings = new BigNumber(userData?.pendingReward || 0)

  const blocksUntilStart = Math.max(startBlock - block, 0)
  const blocksRemaining = Math.max(endBlock - block, 0)
  const isOldSyrup = stakingTokenName === QuoteToken.KETCH
  const accountHasStakedBalance = stakedBalance?.toNumber() > 0
  const needsApproval = !accountHasStakedBalance && !allowance.toNumber() && !isBnbPool
  const isCardActive = isFinished && accountHasStakedBalance

  const convertedLimit = new BigNumber(stakingLimit).multipliedBy(new BigNumber(10).pow(tokenDecimals))
  let displayedDecimals = 3
  if (tokenName === 'BTCB') displayedDecimals = 8
  if (tokenName === 'BNB') displayedDecimals = 8

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={stakingLimit && stakingTokenBalance.isGreaterThan(convertedLimit) ? convertedLimit : stakingTokenBalance}
      onConfirm={onStake}
      tokenName={stakingLimit ? `${stakingTokenName} (${stakingLimit} max)` : stakingTokenName}
    />,
  )

  const [onPresentCompound] = useModal(
    <CompoundModal earnings={earnings} onConfirm={onStake} tokenName={stakingTokenName} />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={stakingTokenName} />,
  )

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        setRequestedApproval(false)
      }
    } catch (e) {
      console.error(e)
    }
  }, [onApprove, setRequestedApproval])

  return (
    <Card isActive={isCardActive} isFinished={isFinished && sousId !== 0}>
      <StyledCardBody>
        <CardHeader>
          <CardTitle isFinished={isFinished && sousId !== 0}>
            {isOldSyrup && '[OLD]'} {tokenName} {TranslateString(348, 'Pool')}
          </CardTitle>
          {account && harvest && !isOldSyrup && (
            <Button
              size="sm"
              disabled={!earnings.toNumber() || pendingTx}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            >
              {pendingTx ? 'Collecting' : 'Harvest'}
            </Button>
          )}
        </CardHeader>
        <CardTokenImg src={`/images/tokens/${image || tokenName}.png`} alt={tokenName} />
        {!isOldSyrup ? (
          <BalanceAndCompound>
            <Balance
              value={getBalanceNumber(earnings, tokenDecimals)}
              isDisabled={isFinished}
              decimals={displayedDecimals}
            />
            {sousId === 0 && account && harvest && (
              <Button size="sm" disabled={!earnings.toNumber() || pendingTx} onClick={onPresentCompound}>
                {pendingTx ? TranslateString(999, 'Compounding') : TranslateString(999, 'Compound')}
              </Button>
            )}
          </BalanceAndCompound>
        ) : (
          <OldSyrupTitle hasBalance={accountHasStakedBalance} />
        )}
        <Label isFinished={isFinished && sousId !== 0} text={TranslateString(330, `${tokenName} earned`)} />
        <StyledCardActions>
          {!account && (
            <Button fullWidth onClick={onPresentConnectModal}>
              {TranslateString(292, 'Unlock Wallet')}
            </Button>
          )}
          {account &&
            (needsApproval && !isOldSyrup ? (
              <Button disabled={isFinished || requestedApproval} onClick={handleApprove} fullWidth>
                {`Approve ${stakingTokenName}`}
              </Button>
            ) : (
              <>
                <Button
                  disabled={stakedBalance.eq(new BigNumber(0)) || pendingTx}
                  onClick={
                    isOldSyrup
                      ? async () => {
                          setPendingTx(true)
                          await onUnstake('0')
                          setPendingTx(false)
                        }
                      : onPresentWithdraw
                  }
                >
                  {`Unstake ${stakingTokenName}`}
                </Button>
                <StyledActionSpacer />
                {!isOldSyrup && (
                  <IconButton disabled={isFinished && sousId !== 0} onClick={onPresentDeposit}>
                    <AddIcon color="background" />
                  </IconButton>
                )}
              </>
            ))}
        </StyledCardActions>
        <StyledDetails>
          <StyledLabel isDisabled={isFinished}>{TranslateString(352, 'APY')}:</StyledLabel>
          {isFinished || isOldSyrup || !apy || apy?.isNaN() || !apy?.isFinite() ? (
            <StyledLabel isDisabled={isFinished}>-</StyledLabel>
          ) : (
            <Balance fontSize="16px" isDisabled={isFinished} value={apy?.toNumber()} decimals={2} unit="%" />
          )}
        </StyledDetails>
        <StyledDetails>
          <StyledLabel isDisabled={isFinished}>🥙 {TranslateString(384, 'Your Stake')}:</StyledLabel>
          <Balance fontSize="16px" isDisabled={isFinished} value={getBalanceNumber(stakedBalance)} />
        </StyledDetails>
        <CardFooter
          projectLink={projectLink}
          totalStaked={totalStaked}
          blocksRemaining={blocksRemaining}
          blocksUntilStart={blocksUntilStart}
          poolCategory={poolCategory}
        />
      </StyledCardBody>
    </Card>
  )
}

export default PoolCard
