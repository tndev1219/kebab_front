import React from 'react'
import { Heading } from 'kebabfinance-uikit'
import styled from 'styled-components'

import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import Hero from './components/Hero'
import BackedCard from './components/BackedCard'
import CompCard from './components/CompCard'
import DefiCard from './components/DefiCard'
import FeeCard from './components/FeeCard'
import GraphCard from './components/GraphCard'
import AccessCard from './components/AccessCard'
import GoldCard from './components/GoldCard'
import SilverCard from './components/SilverCard'

const Title = styled(Heading)`
  font-family: 'GilroyMedium';
  font-size: 64px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.kslvText};
  margin-top: -20px;
  text-align: center;
`
const DefiCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;
  margin-top: 50px;

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
const FeeCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;
  margin-top: 24px;

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

const KSLV = () => {
  return (
    <Page>
      <Container>
        <Hero />
        <Title as="h1">Metal Token</Title>
        <BackedCard />
        <DefiCardWrapper>
          <CompCard />
          <DefiCard />
        </DefiCardWrapper>
        <FeeCardWrapper>
          <FeeCard />
          <GraphCard />
        </FeeCardWrapper>
        <AccessCard />
        <GoldCard />
        <SilverCard />
      </Container>
    </Page>
  )
}

export default KSLV
