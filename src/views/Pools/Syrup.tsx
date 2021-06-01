import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { BLOCKS_PER_YEAR } from 'config'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
// import useI18n from 'hooks/useI18n'
import useBlock from 'hooks/useBlock'
import { getBalanceNumber } from 'utils/formatBalance'
import { useFarms, usePoolsUser } from 'state/hooks'
// import { QuoteToken, PoolCategory } from 'config/constants/types'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import Coming from './components/Coming'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'
import Hero from './components/Hero'

const Pools = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 16px;
  margin-bottom: 100px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 24px;
  }
  @media (min-width: 852px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 40px;
  }
  @media (min-width: 968px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 40px;
  }
  & > div {
    grid-column: 2 / 8;
    @media (min-width: 576px) {
      grid-column: span 6;
    }
  }
`

const Pool: React.FC = () => {
  const { path } = useRouteMatch()
  // const TranslateString = useI18n()
  const { account } = useWallet()
  const farms = useFarms()
  const pools = usePoolsUser(account)
  // const bnbPriceUSD = usePriceBnbBusd()
  const block = useBlock()

  // const priceToBnb = (tokenName: string, tokenPrice: BigNumber, quoteToken: QuoteToken): BigNumber => {
  //   const tokenPriceBN = new BigNumber(tokenPrice)
  //   if (tokenName === 'BNB') {
  //     return new BigNumber(1)
  //   }
  //   if (tokenPrice && quoteToken === QuoteToken.BUSD) {
  //     return tokenPriceBN.div(bnbPriceUSD)
  //   }
  //   return tokenPriceBN
  // }

  const poolsWithApy = pools.map((pool) => {
    // const isBnbPool = pool.poolCategory === PoolCategory.BINANCE
    // const rewardTokenFarm = farms.find((f) => f.tokenSymbol === pool.tokenName)
    const stakingTokenFarm = farms.find((s) => s.lpSymbol === 'KEBAB-BUSD LP')

    const stakingTokenPrice = new BigNumber(stakingTokenFarm?.tokenPriceVsQuote)
    let rewardTokenPrice = stakingTokenPrice
    if (pool.tokenName === 'BTCB') {
      rewardTokenPrice = new BigNumber(farms.find((f) => f.tokenSymbol === pool.tokenName).tokenPriceVsQuote)
    } else if (pool.tokenName === 'BNB') {
      rewardTokenPrice = new BigNumber(farms.find((f) => f.tokenSymbol === pool.tokenName).tokenPriceVsQuote)
    }

    const totalRewardPricePerYear = rewardTokenPrice.times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
    const totalStakingTokenInPool = stakingTokenPrice.times(getBalanceNumber(pool.totalStaked))
    const apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)

    // // /!\ Assume that the farm quote price is BNB
    // const stakingTokenPriceInBNB = isBnbPool ? new BigNumber(1) : new BigNumber(stakingTokenFarm?.tokenPriceVsQuote)
    // const rewardTokenPriceInBNB = priceToBnb(
    //   pool.tokenName,
    //   rewardTokenFarm?.tokenPriceVsQuote,
    //   rewardTokenFarm?.quoteTokenSymbol,
    // )

    // const totalRewardPricePerYear = rewardTokenPriceInBNB.times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
    // const totalStakingTokenInPool = stakingTokenPriceInBNB.times(getBalanceNumber(pool.totalStaked))
    // const apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)

    return {
      ...pool,
      isFinished: pool.sousId === 0 ? false : pool.isFinished || block > pool.endBlock,
      apy,
    }
  })

  const [finishedPools, openPools] = partition(poolsWithApy, (pool) => pool.isFinished || !pool.isActive)

  return (
    <Page>
      <Container>
        <Hero />
        <PoolTabButtons />
        <Pools>
          <Route exact path={`${path}`}>
            {orderBy(openPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} />
            ))}
            <Coming />
          </Route>
          <Route path={`${path}/history`}>
            {orderBy(finishedPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} />
            ))}
          </Route>
        </Pools>
      </Container>
    </Page>
  )
}

export default Pool
