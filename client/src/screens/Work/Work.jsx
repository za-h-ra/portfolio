import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import Nav from '../../components/shared/Nav/Nav'

const StyledDiv = styled.div`
	a {
		color: ${colors.black};
		font-weight: 600;
	}
`

export default function Work() {
	return (
		<StyledDiv>
			<Nav />
			<h1>ALL THE WORK</h1>
		</StyledDiv>
	)
}
