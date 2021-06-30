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
  font-family: 'GilroyExtraBold';
  font-size: 34px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.kslvText};
  margin-top: -20px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 60px;
  }
`
const DefiCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 24px;
  margin-top: 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: grid;
    margin-top: 40px;
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
  grid-gap: 20px;
  margin-top: 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: grid;
    grid-gap: 24px;
    margin-top: 40px;
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
        <Title as="h1">Kebab Metals</Title>
        <SilverCard />
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
        {/* <GoldCard /> */}
        {/* <SilverCard /> */}
      </Container>
    </Page>
  )
}

export default KSLV
