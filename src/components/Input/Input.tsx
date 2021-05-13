import React from 'react'
import styled from 'styled-components'

export interface InputProps {
  endAdornment?: React.ReactNode
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  startAdornment?: React.ReactNode
  value: string
}

const Input: React.FC<InputProps> = ({ endAdornment, onChange, placeholder, startAdornment, value }) => {
  return (
    <StyledInputWrapper>
      {!!startAdornment && startAdornment}
      <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
      {!!endAdornment && endAdornment}
    </StyledInputWrapper>
  )
}

const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.input};
  border-radius: 19px;
  height: 48px;
  padding: 0 ${(props) => props.theme.spacing[3]}px;
`

const StyledInput = styled.input`
  width: 100%;
  background: none;
  border: 0;
  color: ${(props) => props.theme.colors.footer};
  font-size: 16px;
  font-weight: 700;
  flex: 1;
  height: 56px;
  margin: 0;
  padding: 0;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.footer};
  }
`

export default Input
