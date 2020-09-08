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

const AboutContainer = styled.div`
  font-family: 'Nanum Gothic', sans-serif;
  padding: 20px 0;
  margin: 100px;
`

const AboutHeading = styled.h1`
  color: black;
  margin-bottom: 80px;
  position: relative;
  font-size: 26px;
  padding-bottom: 20px;

  &::before {
    content: "";
    position: absolute;
    width: 80px;
    height: 3px;
    background-color: black;
    bottom: 0;
  }
`

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const AboutPhoto = styled.img`
  height: 300px;
  margin-right: 30px;
`

const AboutText = styled.div`
  flex: 1;

  h3 {
    margin: 10px 0;
    font-size: 18px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    margin-top: 20px;
    text-align: justify;
  }
`

export default function About() {
	return (
		<StyledDiv>
			<Nav />
			<AboutContainer>
				<AboutHeading>
					zahrakhadijha.com is the online home of Zahra Khan—designer,
					developer, illustrator, marketer and still aspiring polymath.
				</AboutHeading>
				<AboutContent>
					<AboutPhoto src='https://i.imgur.com/LlyC4aZ.jpg' />
          <AboutText>
            <h2>Hi, I'm Zahra.</h2>
						<h3>
							<span>Full-Stack Engineer | </span>
							<span>Frontend Developer | </span>
							<span>Designer</span>
						</h3>
						<p>Zahra is a quiet yet witty perfectionist, designer, developer, illustrator & marketer from New York City. With interdisciplinary experience in both Full-Stack Development and Digital Marketing, she is able to use storytelling to develop interactive web applications that help organizations increase their digital presence.</p>
					</AboutText>
				</AboutContent>
			</AboutContainer>
		</StyledDiv>
	)
}
