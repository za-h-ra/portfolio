import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import Nav from '../../components/shared/Nav/Nav'
import IllustrationGallery from '../../components/IllustrationGallery/IllustrationGallery'

const StyledNav = styled.div`
	a {
		color: ${colors.black};
		font-weight: 600;
	}
`

const GalleryContainer = styled.div`
  width: 100%;
  padding: 60px 0;

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: 800;
    font-size: 26px;
    letter-spacing: 2px;
  }

`

const GalleryInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
`

const Border = styled.div`
  width: 180px;
  height: 4px;
  background: black;
  margin: 40px auto;

`

const Gallery = styled.div`
  
img {
  height: 300px;
}

`

export default function Illustrations() {
	return (
		<>
			<StyledNav>
				<Nav />
			</StyledNav>
			<GalleryContainer>
				<GalleryInner>
					<h1>Illustrations</h1>
					<Border></Border>
					<Gallery>
            <IllustrationGallery />
					</Gallery>
				</GalleryInner>
			</GalleryContainer>
		</>
	)
}
