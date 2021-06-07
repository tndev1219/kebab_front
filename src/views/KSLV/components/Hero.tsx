import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 40px;
  }
`
const Hero = () => {
  return <Image src="/images/kslv/token.png" alt="kslv token" />
}

export default Hero
