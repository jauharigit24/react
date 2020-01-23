import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';

class About extends React.Component {
  render() {
    return (
		<React.Fragment>
			<Header/>
			<h2>About</h2>
		</React.Fragment>
	);
  }
}

export default About;