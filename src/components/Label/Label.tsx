import React from 'react'
import styled from 'styled-components'

interface LabelProps {
  text?: string
  isFinished?: boolean
}

const Label: React.FC<LabelProps> = ({ text, isFinished = false }) => (
  <StyledLabel isFinished={isFinished}>{text}</StyledLabel>
)

const StyledLabel = styled.div<{ isFinished: boolean }>`
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textInactive' : 'primary']};
  font-family: GilroySemiBold;
  font-size: 16px;
`

export default Label
