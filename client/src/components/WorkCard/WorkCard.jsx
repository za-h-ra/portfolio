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
    color: #FF8552;
    text-transform: uppercase;
    font-weight: 700;
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

const Github = styled.a`
  font-family: 'Inconsolata', monospace;
  text-transform: lowercase;
  color: grey;

  &:hover {
    color: ${colors.matteBlack};
  }
`

const Icon = styled.img`
  width: 40px;
`

export default function WorkCard(props) {
	return (
		<CardContainer>
			<StyledLink href={props.url}>
        <Image src={props.image} />
				<br />
        <p>{props.title}</p>
        <br />
        <Icon src={props.html} /> <Icon src={props.react} />  <Icon src={props.styledComponents} /> <Icon src={props.node} /> <Icon src={props.ruby} /> <Icon src={props.rails} /> <Icon src={props.postgres} /> <Icon src={props.heroku} />
      </StyledLink>
			<StyledText>{props.description}</StyledText>
			<Github href={props.github}>See on Github</Github>
		</CardContainer>
	)
}
