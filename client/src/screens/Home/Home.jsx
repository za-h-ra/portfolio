import React from 'react'
import styled from 'styled-components'
import Nav from '../../components/shared/Nav/Nav'
import { Link } from 'react-router-dom'

const HomeContainer = styled.div`
	background-image: linear-gradient(to bottom, #ff8552, #ff27a8);
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100vh;
	min-height: 100vh;
	color: white;
`

const AboutText = styled.p`
	font-family: 'Nanum Gothic', sans-serif;
	margin: 200px;
	position: relative;
	padding: 20px;
	font-size: 40px;

	&::before {
		content: '';
		position: absolute;
		width: 80px;
		height: 3px;
		background-color: white;
		bottom: 0;
		margin-top: 20px;
	}
`

const WorkLink = styled(Link)`
	color: white;

	&:hover {
		color: black;
		text-decoration: none;
	}
`

const EmailLink = styled.a`
	color: white;

	&:hover {
		color: black;
		text-decoration: none;
	}
`

const LinkedInLink = styled.a`
	color: white;

	&:hover {
		color: black;
		text-decoration: none;
	}
`

export default function Home() {
	return (
		<HomeContainer>
			<Nav />
			<AboutText>
				zahrakhadijha.com is the online home of Zahra Khan—designer, developer,
				illustrator, marketer and still aspiring polymath.
				<br />
				<br />
				Zahra is currently updating some of the sections of this site but you
				can still see all of her <WorkLink to='/work'>work</WorkLink> and say{' '}
				<i>hello</i> via{' '}
				<EmailLink href='mailto: zahra.khan1@icloud.com'>email</EmailLink> or{' '}
				<LinkedInLink href='https://www.linkedin.com/in/zahra-khan-01/'>
					LinkedIn
				</LinkedInLink>
			</AboutText>
		</HomeContainer>
	)
}
