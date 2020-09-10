import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './screens/About/About'
import Home from './screens/Home/Home'
import Work from './screens/Work/Work'
import Illustrations from './screens/Illustrations/Illustrations'

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/work' component={Work} />
				<Route exact path='/about' component={About} />
				<Route exact path='/illustrations' component={Illustrations} />
			</Switch>
		</div>
	)
}

export default App
