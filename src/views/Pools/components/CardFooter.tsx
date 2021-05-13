import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { ArrowDropDownIcon, ArrowDropUpIcon } from 'kebabfinance-uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import useI18n from 'hooks/useI18n'
import Balance from 'components/Balance'
import { CommunityTag, CoreTag, BinanceTag } from 'components/Tags'
import { PoolCategory } from 'config/constants/types'

const tags = {
  [PoolCategory.BINANCE]: BinanceTag,
  [PoolCategory.CORE]: CoreTag,
  [PoolCategory.COMMUNITY]: CommunityTag,
}

interface Props {
  projectLink: string
  totalStaked: BigNumber
  blocksRemaining: number
  blocksUntilStart: number
  poolCategory: PoolCategory
}

const StyledFooter = styled.div`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? '#524B63' : '#E9EAEB')};
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 16px;
  margin-left: -31px;
  margin-right: -31px;
  padding-top: 16px;
  padding-left: 31px;
  padding-right: 31px;
`
const StyledDetailsButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  height: 32px;
  justify-content: center;
  outline: 0;
  padding: 0;
  &:hover {
    opacity: 0.9;
  }
`
const Details = styled.div`
  margin-top: 16px;
`
const Row = styled.div`
  align-items: center;
  display: flex;
`
const FlexFull = styled.div`
  flex: 1;
`
const Label = styled.div`
  font-family: GilroySemiBold;
  font-size: 16px;
`
const TokenLink = styled.a`
  font-family: GilroySemiBold;
  font-size: 16px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.info};
`

const CardFooter: React.FC<Props> = ({ projectLink, totalStaked, blocksRemaining, blocksUntilStart, poolCategory }) => {
  const [isOpen, setIsOpen] = useState(false)
  const TranslateString = useI18n()
  const Icon = isOpen ? ArrowDropUpIcon : ArrowDropDownIcon

  const handleClick = () => setIsOpen(!isOpen)
  const Tag = tags[poolCategory]

  return (
    <StyledFooter>
      <Row>
        <FlexFull>
          <Tag />
        </FlexFull>
        <StyledDetailsButton onClick={handleClick}>
          {isOpen ? 'Hide' : 'Details'} <Icon color="currentColor" />
        </StyledDetailsButton>
      </Row>
      {isOpen && (
        <Details>
          <Row>
            <FlexFull>
              <Label>{TranslateString(408, 'Total:')}</Label>
            </FlexFull>
            <Balance fontSize="16px" value={getBalanceNumber(totalStaked)} />
          </Row>
          {blocksUntilStart > 0 && (
            <Row>
              <FlexFull>
                <Label>{TranslateString(410, 'Start')}:</Label>
              </FlexFull>
              <Balance fontSize="16px" value={blocksUntilStart} decimals={0} />
            </Row>
          )}
          {blocksUntilStart === 0 && blocksRemaining > 0 && (
            <Row>
              <FlexFull>
                <Label>{TranslateString(410, 'End')}:</Label>
              </FlexFull>
              <Balance fontSize="16px" value={blocksRemaining} decimals={0} />
            </Row>
          )}
          <TokenLink href={projectLink} target="_blank">
            {TranslateString(412, 'View project site')}
          </TokenLink>
        </Details>
      )}
    </StyledFooter>
  )
}

export default React.memo(CardFooter)
