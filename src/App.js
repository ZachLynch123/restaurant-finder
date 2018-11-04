import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // api url https://developers.zomato.com/api/v2.1/search?count=3&lat=36.0144&lon=-115.1174&radius=75&sort=real_distance&order=asc

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
