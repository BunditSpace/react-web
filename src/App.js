import React, { Component } from 'react';
import Header from './components/layout/header';
import './App.css';

class App extends Component {

  state = {
    imageUrl: ""
  }
  
  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho')
      .then(res => res.json())
      .then(json => json.data.image_url)
      .then((imageUrl) => {
        this.setState({
          imageUrl: imageUrl
        })
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <img src={this.state.imageUrl} alt="gif" />
      </div>
    );
  }
}

export default App;
