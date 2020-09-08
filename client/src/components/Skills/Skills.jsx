import React from 'react'
import styled from 'styled-components'

const SkillsContainer = styled.div`

`

const Skill = styled.div``

const SkillInfo = styled.div``

export default function Skills(props) {
	return (
		<SkillsContainer>
			<Skill>
        <SkillInfo>
          <span>{props.skill}</span>
        </SkillInfo>
			</Skill>
		</SkillsContainer>
	)
}
