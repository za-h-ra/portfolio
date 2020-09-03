import React from 'react'
import styled from 'styled-components'
import '../../'

const HomeContainer = styled.div`
  background-image: linear-gradient(to bottom, #F7D1D0, #B658BE);
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`


export default function Home() {
  return (
    <HomeContainer>
      <h1>HOMEPAGE</h1>
    </HomeContainer>
  )
}
