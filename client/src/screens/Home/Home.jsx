import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/shared/Nav/Nav'

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
			<Nav />
		</HomeContainer>
	)
}
