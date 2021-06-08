import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  background-color: #252836;
  box-shadow: none;
  height: 423px;
  margin: auto;
  border-radius: 40px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 370px;
  }
`
const StyledCardBody = styled(CardBody)`
  padding: 40px 24px;
  width: 100%;
  height: 100%;
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 32px;
  text-align: center;
  color: #34c759;
`
const data = [
  {
    name: '',
    yAxis: '',
    uv: 400,
  },
  {
    name: 'Y1',
    yAxis: 'A1',
    uv: 180,
  },
  {
    name: 'Y2',
    yAxis: 'A2',
    uv: 95,
  },
  {
    name: 'Y3',
    yAxis: 'A3',
    uv: 60,
  },
  {
    name: 'Y4',
    yAxis: 'A4',
    uv: 50,
  },
]

const FeeCard = () => {
  const DataFormater = (number) => {
    if (number === 0) {
      return ''
    }
    return `A${9 - number / 50}`
  }

  return (
    <StyledCard>
      <StyledCardBody>
        <CardTitle>Amount/Year</CardTitle>
        <ResponsiveContainer height={320}>
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -30,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#32D74B" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#32D74B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ stroke: '#F5F5F7', fontSize: 12 }} />
            <YAxis
              type="number"
              domain={[0, 400]}
              tickFormatter={DataFormater}
              tickCount={9}
              tick={{ stroke: '#F5F5F7', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Area
              type="basis"
              dataKey="uv"
              stroke="#32D74B"
              fillOpacity={1}
              fill="url(#colorUv)"
              strokeWidth={2}
              connectNulls
            />
          </AreaChart>
        </ResponsiveContainer>
      </StyledCardBody>
    </StyledCard>
  )
}

export default FeeCard
