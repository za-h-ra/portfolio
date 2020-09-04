import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import styled from 'styled-components'
import { colors } from '../../../styles/global'

const NavBar = styled.nav`
	background-color: transparent;
	width: 100%;
	height: 90px;
	font-family: 'Roboto', sans-serif;
  padding: 0px 60px;

  a {
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 3px;
		font-weight: 600;
		color: ${colors.white};
		font-family: 'Roboto', sans-serif;
    font-size: 20px;
  }
  
`


const Work = styled(NavLink)`
	position: fixed;
	left: 40px;
  top: 30px;
`

const About = styled(NavLink)`
	position: fixed;
	top: 30px;
	right: 40px;
`

const Illustrations = styled(NavLink)`
	position: fixed;
	top: 50%;
	left: 40px;
	transform: translate(-40%, -50%) rotate(-90deg);
`

const Resume = styled(NavLink)`
	position: fixed;
	top: 50%;
	right: 40px;
	transform: translate(40%, 50%) rotate(90deg);
`

export default function Nav() {
	return (
		<NavBar>
			<Logo />
			<Work to='/work'>Work</Work>
			<About to='/about'>About</About>
			<Illustrations to='/illustrations'>Illustrations</Illustrations>
			<Resume to='/resume'>Resume</Resume>
		</NavBar>
	)
}
