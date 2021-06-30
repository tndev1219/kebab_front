import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody } from 'kebabfinance-uikit'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  background-color: #252836;
  box-shadow: none;
  height: 404px;
  margin: auto;
  border-radius: 40px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 423px;
    max-width: 370px;
  }
`
const StyledCardBody = styled(CardBody)`
  padding: 40px 24px;
  width: 100%;
  height: 100%;
`
const CardTitle = styled(Heading).attrs({ size: 'lg' })`
  font-size: 24px;
  text-align: center;
  color: #32D74B;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 34px;
    font-family: GilroyExtraBold;
  }
`
const data = [
  { name: 'Y0', uv: 10000 },
  { name: 'Y1', uv: 9800 },
  { name: 'Y2', uv: 9604 },
  { name: 'Y3', uv: 9412 },
  { name: 'Y4', uv: 9224 },
  { name: 'Y5', uv: 9039 },
  { name: 'Y6', uv: 8858 },
  { name: 'Y7', uv: 8681 },
  { name: 'Y8', uv: 8508 },
  { name: 'Y9', uv: 8337 },
  { name: 'Y10', uv: 8171 },
  { name: 'Y11', uv: 8007 },
  { name: 'Y12', uv: 7847 },
  { name: 'Y13', uv: 7690 },
  { name: 'Y14', uv: 7536 },
  { name: 'Y15', uv: 7386 },
  { name: 'Y16', uv: 7238 },
  { name: 'Y17', uv: 7093 },
  { name: 'Y18', uv: 6951 },
  { name: 'Y19', uv: 6812 },
  { name: 'Y20', uv: 6676 },
  { name: 'Y21', uv: 6543 },
  { name: 'Y22', uv: 6412 },
  { name: 'Y23', uv: 6283 },
  { name: 'Y24', uv: 6158 },
  { name: 'Y25', uv: 6035 },
  { name: 'Y26', uv: 5914 },
  { name: 'Y27', uv: 5796 },
  { name: 'Y28', uv: 5680 },
  { name: 'Y29', uv: 5566 },
  { name: 'Y30', uv: 5455 },
  { name: 'Y31', uv: 5346 },
  { name: 'Y32', uv: 5239 },
  { name: 'Y33', uv: 5134 },
  { name: 'Y34', uv: 5031 },
  { name: 'Y35', uv: 4931 },
  { name: 'Y36', uv: 4832 },
  { name: 'Y37', uv: 4735 },
  { name: 'Y38', uv: 4641 },
  { name: 'Y39', uv: 4548 },
  { name: 'Y40', uv: 4457 },
  { name: 'Y41', uv: 4368 },
  { name: 'Y42', uv: 4281 },
  { name: 'Y43', uv: 4195 },
  { name: 'Y44', uv: 4111 },
  { name: 'Y45', uv: 4029 },
  { name: 'Y46', uv: 3948 },
  { name: 'Y47', uv: 3869 },
  { name: 'Y48', uv: 3792 },
  { name: 'Y49', uv: 3716 },
  { name: 'Y50', uv: 3642 }
]


const FeeCard = () => {
  const DataFormater = (number) => {
    if (number === 0) {
      return ''
    }
    return (number/100).toString()
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
              tickCount={5}
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
