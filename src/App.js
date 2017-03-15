import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
	imageUrl: ""
  }
  componentDidMount() {
	fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho')
	.then( res => res.json())
	.then( json => json.data.image_url )
	.then( (imageUrl) => {
		this.setState({
			imageUrl: imageUrl
		})
	});
  }
	
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Site</h2>
        </div>
		<img src={this.state.imageUrl} alt="gif" />
      </div>
    );
  }
}

export default App;
