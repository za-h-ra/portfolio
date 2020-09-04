import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'


const CardContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  width: 650px;
`

const StyledLink = styled.a`
  font-family: 'Inconsolata', monospace;
  text-decoration: none;
  text-transform: lowercase;
  text-align: center;
  color: ${colors.matteBlack};
  font-size: 16px;

  &:hover {
    color: grey;
  }
`

const Image = styled.img`
  height: 400px;
  transition: filter 0.3s ease;
  &:hover {
    filter: brightness(0.8);
  }
`

const StyledText = styled.p`
  font-family: 'Inconsolata', monospace;
  text-transform: lowercase;
  text-align: center;


`

export default function WorkCard(props) {
	return (
		<CardContainer>
				<StyledLink href={props.url}>
        <Image src={props.image} />
          <br />
          <p>{props.title}</p>
        </StyledLink>
        <StyledText>{props.description}</StyledText>
		</CardContainer>
	)
}
