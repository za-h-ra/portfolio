import React from 'react'
import styled from 'styled-components'

const GalleryCard = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	img {
		flex: 25%;
		overflow: hidden;
		cursor: pointer;
	}

	@media screen and (max-width: 960px) {
		flex: 33.33%;
	}
`

const Image = styled.img`
	transition: 0.4s;

	&:hover {
		transform: scale(1.4) rotate(15deg);
	}
`

export default function IllustrationGallery() {
	return (
		<GalleryCard>
			<a href={require('../../illustrations/20.png')}>
				<Image src={require('../../illustrations/20.png')} />
			</a>

			<a href={require('../../illustrations/13.png')}>
				<Image src={require('../../illustrations/13.png')} />
			</a>

			<a href={require('../../illustrations/22.png')}>
				<Image src={require('../../illustrations/22.png')} />
			</a>

			<a href={require('../../illustrations/17.png')}>
				<Image src={require('../../illustrations/17.png')} />
			</a>

			<a href={require('../../illustrations/5.png')}>
				<Image src={require('../../illustrations/5.png')} />
			</a>

			<a href={require('../../illustrations/3.png')}>
				<Image src={require('../../illustrations/3.png')} />
			</a>

			<a href={require('../../illustrations/7.png')}>
				<Image src={require('../../illustrations/7.png')} />
			</a>

			<a href={require('../../illustrations/23.png')}>
				<Image src={require('../../illustrations/23.png')} />
			</a>

			<a href={require('../../illustrations/24.png')}>
				<Image src={require('../../illustrations/24.png')} />
			</a>

			<a href={require('../../illustrations/19.png')}>
				<Image src={require('../../illustrations/19.png')} />
			</a>

			<a href={require('../../illustrations/18.png')}>
				<Image src={require('../../illustrations/18.png')} />
			</a>

			<a href={require('../../illustrations/16.png')}>
				<Image src={require('../../illustrations/16.png')} />
			</a>

			<a href={require('../../illustrations/15.png')}>
				<Image src={require('../../illustrations/15.png')} />
			</a>

			<a href={require('../../illustrations/14.png')}>
				<Image src={require('../../illustrations/14.png')} />
			</a>

			<a href={require('../../illustrations/12.png')}>
				<Image src={require('../../illustrations/12.png')} />
			</a>

			<a href={require('../../illustrations/11.png')}>
				<Image src={require('../../illustrations/11.png')} />
			</a>

			<a href={require('../../illustrations/10.png')}>
				<Image src={require('../../illustrations/10.png')} />
			</a>

			<a href={require('../../illustrations/9.png')}>
				<Image src={require('../../illustrations/9.png')} />
			</a>

			<a href={require('../../illustrations/8.png')}>
				<Image src={require('../../illustrations/8.png')} />
			</a>

			<a href={require('../../illustrations/21.png')}>
				<Image src={require('../../illustrations/21.png')} />
			</a>

			<a href={require('../../illustrations/1.png')}>
				<Image src={require('../../illustrations/1.png')} />
			</a>

			<a href={require('../../illustrations/26.png')}>
				<Image src={require('../../illustrations/26.png')} />
			</a>

			<a href={require('../../illustrations/2.png')}>
				<Image src={require('../../illustrations/2.png')} />
			</a>

			<a href={require('../../illustrations/4.png')}>
				<Image src={require('../../illustrations/4.png')} />
			</a>

			<a href={require('../../illustrations/6.png')}>
				<Image src={require('../../illustrations/6.png')} />
			</a>

			<a href={require('../../illustrations/25.png')}>
				<Image src={require('../../illustrations/25.png')} />
			</a>
		</GalleryCard>
	)
}
