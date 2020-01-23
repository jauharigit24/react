import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
class Home extends React.Component {
  render() {
	
    return (
		<React.Fragment>
			<Header/>
			<h2>Home</h2>
		</React.Fragment>
	);
  }
}

export default Home;