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

const GalleryContainer = styled.div``

const GalleryInner = styled.div``

const Border = styled.div``

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
