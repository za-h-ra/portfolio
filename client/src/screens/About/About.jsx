import React from 'react'
import Nav from '../../components/shared/Nav/Nav'
import styled from 'styled-components'
import { colors } from '../../styles/global'

const StyledDiv = styled.div`
	a {
    color: ${colors.black};
    font-weight: 600;
	}
`

export default function About() {
	return (
		<StyledDiv>
			<Nav />
			<h1>ABOUT ME!!!</h1>
		</StyledDiv>
	)
}
