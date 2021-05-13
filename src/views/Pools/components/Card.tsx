import styled from 'styled-components'
import { Card } from 'kebabfinance-uikit'

const StyledCard = styled(Card)<{ isActive?: boolean; isFinished?: boolean }>`
  display: flex;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};
  img {
    width: 76px;
    height: 76px;
  }
`

export default StyledCard
