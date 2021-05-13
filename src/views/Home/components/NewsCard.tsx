import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'
import { TwitterTimelineEmbed } from 'react-twitter-embed/dist'
import useTheme from 'hooks/useTheme'

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.cardBackground2};
  box-shadow: none;
  width: 100%;
  height: 439px;
  margin: auto;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 358px;
  }
`
const CardBodyBlock = styled.div`
  display: flex;
  justify-content: space-between;
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 32px;
  font-weight: 700;
  color: #1da1f2;
  margin-top: 14px;
`
const Image = styled.img`
  width: 96px;
  height: 78px;
`

const NewsCard = () => {
  const { isDark } = useTheme()

  return (
    <StyledCard>
      <CardBody>
        <CardBodyBlock>
          <CardTitle>Latest Chef Tweet</CardTitle>
          <Image src="/images/tweeter.svg" alt="tweeter" />
        </CardBodyBlock>
        {isDark ? (
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="kebabfinance"
            theme="dark"
            options={{ tweetLimit: '1' }}
            noBorders
            noHeader
            noFooter
            placeholder="Loading Last Chef Tweet"
            transparent
          />
        ) : (
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="kebabfinance"
            theme="light"
            options={{ tweetLimit: '1' }}
            noBorders
            noHeader
            noFooter
            placeholder="Loading Last Chef Tweet"
            transparent
          />
        )}

        {/* Jan 20: Welcome aboard everyone. KEBAB is now listed and actively trading. We stay at <strong>1 KEBAB / block</strong> by community decision. More farming pairs will be added in the coming weeks: vote on twitter. */}
      </CardBody>
    </StyledCard>
  )
}

export default NewsCard
