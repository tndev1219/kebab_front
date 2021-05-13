import styled from 'styled-components'

interface StyledTitleProps {
  isFinished?: boolean
}

const CardTitle = styled.div<StyledTitleProps>`
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textInactive' : 'text']};
  font-weight: 700;
  font-size: 28px;
`

export default CardTitle
