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
          Be sure to register your team on the <a href="https://hackdash.org/dashboards/graphbuzz">HackDash</a>. <a href="http://neo4j-users-slack-invite.herokuapp.com/">Join the Neo4j Slack workspace</a> and ask questions in #graph-hack-2018 channel.
        </p>
        <Bingocard></Bingocard>

      </div>
    );
  }
}

export default App;