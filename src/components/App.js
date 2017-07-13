import React, { Component } from 'react';
import logo from './logo.svg';
import '../styles/App.css';
import api from "../utli/api.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      characters: 'All',
      info: null
    }
  }
  componentDidMount(){
    api.fetchStarWars(this.state)
    .then(info => {
      console.log(info)
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
