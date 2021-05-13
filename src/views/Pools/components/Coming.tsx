import React from 'react'
import styled from 'styled-components'
import { CardBody } from 'kebabfinance-uikit'
import { CommunityTag } from 'components/Tags'
import useI18n from 'hooks/useI18n'
import Card from './Card'
import CardTitle from './CardTitle'
import CardTokenImg from './CardTokenImg'

const StyledCardBody = styled(CardBody)`
  width: 100%;
  padding: 38px 31px 16px 31px;
`
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`
const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 12px;
`
const Balance = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 32px;
  font-weight: 700;
`
const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-family: GilroySemiBold;
  font-size: 16px;
`
const ApplyNowLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 19px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  height: 48px;
  margin: 16px 0;
  text-decoration: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`
const DetailPlaceholder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledLabel = styled.div`
  font-size: 16px;
  font-family: GilroySemiBold;
`
const Value = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => (theme.isDark ? '#524B63' : '#E9EAEB')};
  margin-top: 16px;
  margin-left: -31px;
  margin-right: -31px;
  padding-top: 16px;
  padding-left: 31px;
  padding-right: 31px;
`
const Coming: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Card>
      <StyledCardBody>
        <CardHeader>
          <CardTitle>{TranslateString(414, 'Your Project?')} 👀</CardTitle>
        </CardHeader>
        <CardTokenImg src="/images/bunny-question.svg" alt="Your project here" />
        <BalanceAndCompound>
          <Balance>???</Balance>
        </BalanceAndCompound>
        <Label>{TranslateString(416, 'Create a pool for your token')}</Label>
        <ApplyNowLink
          href="https://docs.google.com/forms/d/e/1FAIpQLSc1gPCMYOjWC75bcK-9weaia4egPfCPLvkaINVGpc6IidogLA/viewform"
          target="_blank"
        >
          {TranslateString(418, 'Apply Now')}
        </ApplyNowLink>
        <DetailPlaceholder>
          <StyledLabel>{TranslateString(352, 'APY')}:</StyledLabel>
          <Value>??</Value>
        </DetailPlaceholder>
        <DetailPlaceholder>
          <StyledLabel>🥙 {TranslateString(384, 'Your Stake')}:</StyledLabel>
          <Value>??? KEBAB</Value>
        </DetailPlaceholder>
        <Footer>
          <CommunityTag />
        </Footer>
      </StyledCardBody>
    </Card>
  )
}

export default Coming
