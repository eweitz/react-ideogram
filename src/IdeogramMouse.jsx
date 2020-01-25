import React, { Component } from 'react';
import Header from './Header';
import ReactIdeogram from './ReactIdeogram';

export default class IdeogramMouse extends Component {
  render() {
    return (
      <div className="App">
        <Header page='mouse'/>
        <ReactIdeogram organism='mouse'/>
      </div>
    );
  }
}