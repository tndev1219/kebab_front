import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from 'kebabfinance-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/kebab_logo.svg');
  background-repeat: no-repeat;
  background-position: 90% 10%;
  background-size: 25%;
  background-color: ${({ theme }) => theme.colors.cardBackground1};
  width: 100%;
  height: 534px;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 32px;
  font-weight: 700;
  color: white;
  margin-top: 14px;
`
const Blocks = styled.div`
  position: relative;
  top: 140px;
`
const Block = styled.div<{ account?: string | null }>`
  display: flex;
  flex-direction: ${(props) => (!props.account ? 'column' : 'column-reverse')};
  margin-bottom: 16px;
`
const Label = styled.div<{ account?: string | null }>`
  font-family: 'GilroySemiBold';
  font-size: ${(props) => (!props.account ? '20px' : '16px')};
  color: ${({ account, theme }) => (!account ? 'white' : theme.colors.textDisabled)};
  margin-bottom: 12px;
`
const Value = styled.div`
  margin-bottom: 12px;
`
const Actions = styled.div`
  position: absolute;
  bottom: 24px;
  width: calc(100% - 48px);
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <CardTitle>{TranslateString(542, 'Farms & Staking')}</CardTitle>
        <Blocks>
          <Block account={account}>
            <Label account={account}>{TranslateString(544, 'KEBAB to Harvest')}</Label>
            <Value>
              <CakeHarvestBalance />
            </Value>
          </Block>
          <Block account={account}>
            <Label account={account}>{TranslateString(546, 'KEBAB in Wallet')}</Label>
            <Value>
              <CakeWalletBalance />
            </Value>
          </Block>
        </Blocks>
        <Actions>
          {account ? (
            <Button
              id="harvest-all"
              variant="tertiary"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
            >
              {pendingTx
                ? TranslateString(548, 'Collecting KEBAB')
                : TranslateString(999, `Harvest All (${balancesWithValue.length})`)}
            </Button>
          ) : (
            <UnlockButton fullWidth />
          )}
        </Actions>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
