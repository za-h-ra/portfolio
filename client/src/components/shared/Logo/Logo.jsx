import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {colors} from '../../../styles/global'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  
`

const LogoNav = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${colors.white};
  font-size: 20px;
  letter-spacing: 2px;
`

const Zahra = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  margin-top: 30px;
  
`

export default function Logo() {
  return (
    <LogoContainer>
      <LogoNav to="/">
      <Zahra>Zahra</Zahra>
      </LogoNav>
    </LogoContainer>
  )
}
