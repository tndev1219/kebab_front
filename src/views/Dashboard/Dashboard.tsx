import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from 'kebabfinance-uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import { useFarms, usePriceCakeBusd } from 'state/hooks'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import BigNumber from 'bignumber.js'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pan-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  margin: 32px auto;
  max-width: 904px;
  padding-top: 128px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    background-position: left center, right center;
    height: 165px;
    margin-top: 48px;
    padding-top: 0;
  }
`

const Title = styled(Heading)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 40px;
  margin-bottom: ${({ theme }) => theme.spacing[4]}px;
`

const Subtitle = styled(Text)`
  font-weight: 400;
`

const Dashboard: React.FC = () => {
  const TranslateString = useI18n()
  const farms = useFarms()
  const farmsWithBalance = useFarmsWithBalance()
  const kebabPrice = usePriceCakeBusd()

  const rows = []
  for (let i = 0; i < farmsWithBalance.length; i++) {
    const elem = {
      harvestable: farmsWithBalance[i].balance,
      tokenSymbol: farmsWithBalance[i].tokenSymbol,
      quoteTokenSymbol: farmsWithBalance[i].quoteTokenSymbol,
      lpSymbol: farmsWithBalance[i].lpSymbol,
      tokenAmount: farms[i].tokenAmount,
      quoteTokenAmount: farms[i].quoteTokenAmount,
      tokenPriceVsQuote: farms[i].tokenPriceVsQuote,
      lpSupply: farms[i].lpSupply,
      share: null,
      balanceBase: null,
      balanceQuote: null,
      balanceLP: null,
      tvl: null,
      harvestDisp: null
    }
    if (elem.tokenSymbol !== 'KETCH') {
      elem.share = elem.harvestable.div(new BigNumber(elem.lpSupply)).toNumber()
      elem.balanceBase = new BigNumber(elem.tokenAmount).times(elem.share).toNumber()
      elem.balanceQuote = new BigNumber(elem.quoteTokenAmount).times(elem.share).toNumber()
      elem.share *= 100
      elem.harvestDisp = elem.harvestable.toNumber()/(10**18)
      elem.tvl = elem.balanceQuote*2
      if (elem.quoteTokenSymbol !== 'BUSD') {
        elem.tvl = kebabPrice.times(elem.balanceBase*2).toNumber()
      }
      rows.push(elem)
    }
  }

  const Table = styled.table`

  `
  const Th = styled.th`
    border: 1px solid black;
  `

  const Td = styled.td`
    border: 1px solid black;
  `

  return (
    <Page>
      <Hero>
        <div>
          <Title as="h1">{TranslateString(576, 'BSC Dashboard')}</Title>
          <Subtitle>{TranslateString(578, 'Available for the Binance Smart Chain only')}</Subtitle>
        </div>
      </Hero>
      <Container>
        <Table>
          <thead>
            <tr>
              <Th>LP Token</Th>
              <Th>Avail. Liquidities</Th>
              <Th>Harvestable KEBABs</Th>
              <Th>Total Value</Th>
            </tr>
          </thead>
          <tbody>
          {rows.map((row) => {
            return ( <tr>
              <Td>
                ??? {row.lpSymbol}
                <br />
                {row.share}%
              </Td>
              <Td>
                {row.balanceBase} {row.tokenSymbol}
                <br />
                {row.balanceQuote} {row.quoteTokenSymbol}
              </Td>
              <Td>
                {row.harvestDisp} KEBAB
              </Td>
              <Td>
                {row.tvl}
                <br />
                {row.earning}
              </Td>
            </tr>) 
          })}
          </tbody>
          <tfoot>
            <tr>
              <Td>YYY</Td>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </Page>
  )
}

export default Dashboard
