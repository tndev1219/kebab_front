import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Button, Card, CardBody } from 'kebabfinance-uikit'
import { useHarvest } from 'hooks/useHarvest'
import useI18n from 'hooks/useI18n'
import { getBalanceNumber } from 'utils/formatBalance'
import Value from './Value'

interface HarvestProps {
  pid: number
  earnings: BigNumber
}

const StyledCardContentInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Image = styled.img`
  width: 76px;
  height: 76px;
  margin-top: 14px;
  margin-bottom: 27px;
`
const Label = styled.div`
  font-family: GilroySemiBold;
  color: ${(props) => props.theme.colors.primary};
  font-size: 16px;
  margin-top: 8px;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  width: 100 %;
  margin-top: 38px;
  margin-bottom: 14px;
`

const Harvest: React.FC<HarvestProps> = ({ pid, earnings }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)

  return (
    <Card>
      <CardBody>
        <StyledCardContentInner>
          <StyledCardHeader>
            <Image src="/images/tokens/KEBAB.png" alt="kebab" />
            <Value value={getBalanceNumber(earnings)} fontSize="32px" />
            <Label>{TranslateString(330, 'KEBAB earned')}</Label>
          </StyledCardHeader>
          <StyledCardActions>
            <Button
              disabled={!earnings.toNumber() || pendingTx}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            >
              {pendingTx ? 'Collecting KEBAB' : 'Harvest'}
            </Button>
          </StyledCardActions>
        </StyledCardContentInner>
      </CardBody>
    </Card>
  )
}

export default Harvest
