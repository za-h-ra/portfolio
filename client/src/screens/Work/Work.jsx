import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/global'
import Nav from '../../components/shared/Nav/Nav'
import WorkCard from '../../components/WorkCard/WorkCard'
import HtmlIcon from '../../icons/html.svg'
import ReactIcon from '../../icons/react.svg'
import Ruby from '../../icons/ruby.svg'
import Rails from '../../icons/rails.svg'
import Postgres from '../../icons/postgresql.svg'
import StyledComponents from '../../icons/styled-components.svg'
import Heroku from '../../icons/heroku.svg'
import Node from '../../icons/nodejs.svg'

const NavContainer = styled.div`
	a {
		color: ${colors.black};
		font-weight: 600;
	}
`


export default function Work() {
	return (
		<>
			<NavContainer>
				<Nav />
			</NavContainer>
				<WorkCard
					title='Spoon Fork Lavender'
					image='https://i.imgur.com/EAIU1Sv.png'
					url='https://spoon-fork-lavender.netlify.app/'
          description='Spoon Fork Lavender is a restaurant discovery app that allows the users to search for restaurants/cafes/bars in New York City.'
        github="https://github.com/zahrakhadijha/spoonforklavender"
      />
				<WorkCard
					title='Waste Watchers'
					image='https://i.imgur.com/ud2oqRw.png'
					url='https://waste-watchers.netlify.app/'
          description='Waste Watchers is a web and mobile application that makes recycling fun. It provides a way to track what and how often users recycle and shows users the impact they are making on the environment. Points are awarded for every item recycled — every 100 points a digital tree is planted.'
          github="https://github.com/indianakuffer/waste-watchers"
				/>
      <WorkCard
        title='House of Plants'
        image='https://i.imgur.com/31HCs5k.png'
        url='http://house-of-plants.surge.sh/'
        description='House of Plants is a web application that makes taking care of your plants easier! It provides a way to track the plants you have at home by adding them into the application, managing and updating their care, and checking the task off once it is complete.'
        github="https://github.com/zahrakhadijha/house-of-plants"
        react={ReactIcon}
        styledComponents={StyledComponents}
        node={Node}
        ruby={Ruby}
        rails={Rails}
        postgres={Postgres}
        heroku={Heroku}
				/>
		</>
	)
}

