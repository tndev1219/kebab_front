import React, { useCallback } from 'react'
import {
  Route,
  useRouteMatch,
  // NavLink
} from 'react-router-dom'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID, CAKE_POOL_BNB_PID } from 'config'
import Grid from 'components/layout/Grid'
import { useFarms } from 'state/hooks'
import { QuoteToken } from 'config/constants/types'
// import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import Hero from './components/Hero'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'

// const StyledLink = styled(NavLink)`
//   display: none;
//   @media (max-width: 400px) {
//     display: block;
//     background: #50d7dd;
//     border-radius: 5px;
//     line-height: 40px;
//     font-weight: 900;
//     padding: 0 20px;
//     margin-bottom: 30px;
//     color: #fff;
//   }
// `
const StyledGrid = styled(Grid)`
  grid-gap: 20px;
  margin-bottom: 100px;

  @media (max-width: 576px) {
    grid-template-columns: repeat(8, 1fr);
  }
`

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  // const TranslateString = useI18n()
  const farmsLP = useFarms()

  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')

  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      const kebabPriceUsd = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const kebabPriceBnb = new BigNumber(
        farmsLP.find((farm) => farm.pid === CAKE_POOL_BNB_PID)?.tokenPriceVsQuote || 0,
      )
      const btcbPriceUsd = new BigNumber(farmsLP.find((farm) => farm.pid === 4)?.tokenPriceVsQuote || 0)

      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        const cakeRewardPerBlock = CAKE_PER_BLOCK.times(farm.poolWeight)
        const kebabRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = kebabPriceUsd.times(kebabRewardPerYear).div(farm.lpTotalInQuoteToken)

        if (farm.quoteTokenSymbol === QuoteToken.BUSD) {
          // all the /BUSD pairs
          apy = kebabPriceUsd.times(kebabRewardPerYear).div(farm.lpTotalInQuoteToken)
        } else if (farm.quoteTokenSymbol === QuoteToken.BTCB) {
          // all the /BTCB pairs
          apy = kebabPriceUsd.times(kebabRewardPerYear).div(farm.lpTotalInQuoteToken).div(btcbPriceUsd)
        } else if (farm.quoteTokenSymbol === QuoteToken.KEBAB) {
          apy = kebabRewardPerYear.div(farm.lpTotalInQuoteToken)
        } else if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          // KEBAB/BNB
          apy = kebabPriceBnb.times(kebabRewardPerYear).div(farm.lpTotalInQuoteToken)
        } else if (farm.dual) {
          const cakeApy =
            farm && kebabPriceUsd.times(cakeRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken)
          const dualApy =
            farm.tokenPriceVsQuote &&
            new BigNumber(farm.tokenPriceVsQuote)
              .times(farm.dual.rewardPerBlock)
              .times(BLOCKS_PER_YEAR)
              .div(farm.lpTotalInQuoteToken)

          apy = cakeApy && dualApy && cakeApy.plus(dualApy)
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => <FarmCard key={farm.pid} farm={farm} removed={removed} />)
    },
    [farmsLP],
  )

  return (
    <Page>
      <Container>
        <Hero />
        {/* <StyledLink exact activeClassName="active" to="/pools">
          Staking
        </StyledLink> */}
        <FarmTabButtons />
        <StyledGrid>
          <Route exact path={`${path}`}>
            {farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </StyledGrid>
      </Container>
    </Page>
  )
}

export default Farms
