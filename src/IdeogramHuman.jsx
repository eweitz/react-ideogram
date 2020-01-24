import React, { Component } from 'react';
import Header from './Header';
import ReactIdeogram from './ReactIdeogram';

export default class IdeogramHuman extends Component {
  render() {
    return (
      <div className="App">
        <Header page='human'/>
        <ReactIdeogram organism='human'/>
      </div>
    );
  }
}