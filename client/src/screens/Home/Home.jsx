import React from 'react'
import styled from 'styled-components'
import Logo from '../../components/shared/Logo/Logo'

const HomeContainer = styled.div`
	background-image: linear-gradient(to bottom, #FF8552, #FF27A8);
	position: absolute;
	top: 0;
	bottom: 0;
  width: 100%;
  color: white;
`

export default function Home() {
	return (
		<HomeContainer>
			<Logo />
		</HomeContainer>
	)
}
