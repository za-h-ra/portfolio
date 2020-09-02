import React from 'react';
import { Route, Switch } from 'react-router-dom'
import About from './screens/About/About'
import Home from './screens/Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
    </Switch>
    </div>
  );
}

export default App;
