import React, { Component } from 'react';
import logo from './neo4j_logo.png';
import './App.css';
import Bingocard from './Bingocard';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Neo4j Buzzword Bingo Hackathon</h1>
        </header>
        <p className="App-intro">
          Be sure to register your team on the <a href="https://hackdash.org/dashboards/graphbuzz">HackDash</a>
        </p>
        <Bingocard></Bingocard>

      </div>
    );
  }
}

export default App;