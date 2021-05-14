import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Button } from 'kebabfinance-uikit'
import useI18n from 'hooks/useI18n'

const StyledLaunch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 71px;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`
const Image = styled.img`
  width: 324px;
  height: 393px;
`
const RightText = styled.div`
  text-align: center;
  padding-top: 50px;

  ${({ theme }) => theme.mediaQueries.md} {
    text-align: right;
    padding-left: 50px;
  }
`
const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: #e46149;
  font-size: 32px;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-left: 82px;
  }
`
const Blurb = styled(Text)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  margin-bottom: 30px;
`

const Launch = () => {
  const TranslateString = useI18n()

  return (
    <StyledLaunch>
      <Image src="/images/ifos/ifo-launch.png" alt="ifo launch" />
      <RightText>
        <Title>{TranslateString(500, 'Want to launch your own IFO?')}</Title>
        <Blurb>
          {TranslateString(
            502,
            'Launch your project with KebapSwap, Binance Smart Chain’s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.',
          )}
        </Blurb>
        <Button
          as="a"
          href="https://docs.google.com/forms/d/1uerVBpniyl60iaPy-NFWcJ7fZsZ8kIvqPxaiaZt_BJM/edit"
          target="_blank"
          rel="noopener noreferrer"
        >
          {TranslateString(516, 'Apply to Launch')}
        </Button>
      </RightText>
    </StyledLaunch>
  )
}

export default Launch
