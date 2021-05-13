import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from 'kebabfinance-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import FarmStakingCard from './components/FarmStakingCard'
import NewsCard from './components/NewsCard'
import CakeStats from './components/CakeStats'
import TradeCard from './components/TradeCard'
import FarmingCard from './components/FarmingCard'
import StakingCard from './components/StakingCard'
import IfoCard from './components/IfoCard'
import UnlockWalletCard from './components/UnlockWalletCard'

const Hero = styled.div`
  background-image: url('/images/pan-bg.svg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
  align-items: center;
  margin: 32px auto;
  max-width: 738px;
  padding-top: 160px;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 300px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: 396px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 396px;
    margin-top: 48px;
    padding-top: 0;
  }
`
const Title = styled(Heading)`
  font-family: 'GilroyMedium';
  font-size: 64px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing[3]}px;
  text-align: center;
`
const Subtitle = styled(Text)`
  font-family: 'GilroySemiBold';
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 48px;
`
const SmallCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  margin-bottom: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const MediumCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;
  margin-bottom: 64px;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const BigCardsWrapper = styled.div`
  margin-bottom: 80px;
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  return (
    <Page>
      <Hero />
      <Title as="h1">{TranslateString(576, 'Kebab Finance')}</Title>
      <Subtitle>{TranslateString(578, 'The strategically superior yield farming community on BSC.')}</Subtitle>
      <Container>
        <SmallCardsWrapper>
          <TradeCard />
          <FarmingCard />
          <StakingCard />
          <IfoCard />
        </SmallCardsWrapper>
        <MediumCardsWrapper>
          <FarmStakingCard />
          <NewsCard />
        </MediumCardsWrapper>
        <BigCardsWrapper>
          {!account && <UnlockWalletCard />}
          <CakeStats />
        </BigCardsWrapper>
      </Container>
    </Page>
  )
}

export default Home
