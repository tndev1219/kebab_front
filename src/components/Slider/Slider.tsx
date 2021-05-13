import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import useTheme from 'hooks/useTheme'

interface Marks {
  value: number
  label: string
}

interface SliderProps {
  defaultValue: number
  marks: Marks[]
  onSelectValue?: (v: number | number[]) => void
}

const CustomSlider = withStyles({
  root: {
    height: 4,
    width: 'calc(100% - 20px)',
  },
  thumb: {
    height: 14,
    width: 14,
    backgroundColor: '#fff',
    border: '2px solid #EB5757',
    marginTop: -5,
    marginLeft: 0,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% - 4px)',
    color: '#D5422A',
  },
  track: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#EB5757',
  },
  rail: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#BFBFBF',
  },
  mark: {
    width: 14,
    height: 14,
    borderRadius: '50%',
    border: '2px solid #BFBFBF',
    marginTop: -5,
    backgroundColor: '#FFF',
    opacity: 1,
  },
  markActive: {
    backgroundColor: '#EB5757',
    borderColor: '#EB5757',
  },
  markLabel: {
    fontFamily: 'GilroyRegular',
    fontSize: '16px',
    fontWeight: 700,
    marginLeft: 10,
    textAlign: 'center',
  },
})(Slider)

const SliderWrapper = styled.div`
  width: 100%;
  margin: 10px;
  padding-left: 10px;
`
const StyledSlider = styled(CustomSlider)`
  & .MuiSlider-markLabel {
    color: ${({ theme }) => theme.colors.text};
  }
`

const RangeSlider: React.FC<SliderProps> = ({ defaultValue, marks, onSelectValue }) => {
  const { theme } = useTheme()

  return (
    <SliderWrapper>
      <StyledSlider
        value={defaultValue}
        marks={marks}
        onChange={(e, v) => onSelectValue(v)}
        valueLabelDisplay="auto"
        theme={theme}
      />
    </SliderWrapper>
  )
}

export default RangeSlider
