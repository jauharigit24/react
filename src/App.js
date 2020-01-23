import React from 'react';
import logo from './logo.svg';
import About from './pages/about.js';
import Home from './pages/home.js';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

//import './App.css';

function App() {
  return (
	<React.Fragment>
	<Router>
	  <Switch>
		<Route path="/" exact>
			<Home />
		</Route>
		<Route path="/about">
			<About />
		</Route>
    </Switch>
    </Router>
	</React.Fragment>
  );
}

export default App;
