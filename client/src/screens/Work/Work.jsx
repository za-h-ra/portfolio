import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import Nav from '../../components/shared/Nav/Nav'
import WorkCard from '../../components/WorkCard/WorkCard'

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
      <WorkCard
        title='Spoon Fork Lavender'
        image='https://i.imgur.com/8cxUV6t.png'
        url='https://spoon-fork-lavender.netlify.app/'
        description='some text'
      />
		</StyledDiv>
	)
}
