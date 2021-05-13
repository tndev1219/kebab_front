import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import Harvest from './components/Harvest'
import Stake from './components/Stake'
import DualFarmDisclaimer from './components/DualFarmDisclaimer'
import Hero from '../Farms/components/Hero'

const StyledPage = styled(Page)`
  padding-bottom: 24px;

  @media (min-width: 852px) {
    padding-bottom: 48px;
  }
`
const StyledFarm = styled.div``
const Grid = styled.div`
  display: grid;
  grid-gap: 48px;
  grid-template-columns: minmax(auto, 358px);
  align-items: start;
  justify-content: center;
  padding: 38px 0;

  @media (min-width: 852px) {
    grid-template-columns: repeat(2, minmax(auto, 358px));
  }
`
const StyledInfo = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 80px;
  }
`
const Farm: React.FC = () => {
  const TranslateString = useI18n()
  const { ethereum, account } = useWallet()
  const { lpSymbol } = useParams<{ lpSymbol?: string }>()

  const { pid, lpAddresses, tokenSymbol, dual } = useFarmFromSymbol(lpSymbol)
  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid, account)

  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpAddress)
  }, [ethereum, lpAddress])

  return (
    <StyledPage>
      <Container>
        {/* <Image src={`/images/tokens/category-${tokenSymbol || 'KEBAB'}.png`} alt={tokenSymbol} /> */}
        <Hero />
        {dual && <DualFarmDisclaimer tokenName={tokenSymbol} endBlock={dual.endBlock} />}
        <StyledFarm>
          <Grid>
            <Harvest pid={pid} earnings={earnings} />
            <Stake
              lpContract={lpContract}
              pid={pid}
              tokenName={lpSymbol.toUpperCase()}
              allowance={allowance}
              tokenBalance={tokenBalance}
              stakedBalance={stakedBalance}
            />
          </Grid>
          {dual ? (
            <DualFarmDisclaimer tokenName={tokenSymbol} endBlock={dual.endBlock} />
          ) : (
            <StyledInfo>
              {TranslateString(
                590,
                '⭐ Every time you stake and unstake LP tokens, the contract will automagically harvest KEBAB rewards for you!',
              )}
            </StyledInfo>
          )}
        </StyledFarm>
      </Container>
    </StyledPage>
  )
}

export default Farm
