import React, { Component } from 'react';
import Header from './Header';
import ReactIdeogram from './ReactIdeogram';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <ReactIdeogram/>
      </div>
    );
  }
}

export default App;