import React from 'react'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import BigNumber from 'bignumber.js'

export interface LPSupplyProps {
  value: BigNumber
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: ${({ theme }) => theme.colors.textSubtle};
      }
    }
  }
`

const SupplyWrapper = styled.div`
  min-width: 60px;
  text-align: left;
`

const LPSupply: React.FC<LPSupplyProps> = ({ value }) => {
  const TranslateString = useI18n()

  return (
    <Container>
      {value ? (
        <>
          <SupplyWrapper>{new BigNumber(value).dividedBy(new BigNumber(10).pow(18)).toFixed(2)}</SupplyWrapper>
        </>
      ) : (
        <SupplyWrapper>{TranslateString(656, 'Loading...')}</SupplyWrapper>
      )}
    </Container>
  )
}

export default LPSupply
