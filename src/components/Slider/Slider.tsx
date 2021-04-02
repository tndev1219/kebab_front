import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

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
    width: 'calc(100% - 20px)'
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
  active: {
  },
  valueLabel: {
    left: 'calc(-50% - 4px)',
    color: '#D5422A'
  },
  track: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#EB5757'
  },
  rail: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#BFBFBF'
  },
  mark: {
    width: 14,
    height: 14,
    borderRadius: '50%',
    border: '2px solid #BFBFBF',
    marginTop: -5,
    backgroundColor: '#FFF',
    opacity: 1
  },
  markActive: {
    backgroundColor: "#EB5757",
    borderColor: "#EB5757"
  },
  markLabel: {
    fontFamily: 'Kanit',
    fontSize: '18px',
    lineHeight: '27px',
    textAlign: 'center',
    color: '#757575',
  }
})(Slider);


const RangeSlider: React.FC<SliderProps> = ({ defaultValue, marks, onSelectValue }) => {
  return (
    <StyledSlider>
      <CustomSlider value={defaultValue} marks={marks} onChange={(e, v) => onSelectValue(v)} valueLabelDisplay='auto'/>
    </StyledSlider>
  )
}


const StyledSlider = styled.div`
  margin: 10px;
`
export default RangeSlider
