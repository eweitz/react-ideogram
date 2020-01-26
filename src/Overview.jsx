import React, { Component } from 'react';
// import Header from './Header';
// import ReactIdeogram from './ReactIdeogram';

import {
  Link
} from 'react-router-dom';

export default class Overview extends Component {
  render() {
    return (
      <div className="App">
        This will show cards as in https://eweitz.github.io/ideogram.
        <ul>
          <li><Link to="/react-ideogram/human">Human</Link></li>
          <li><Link to="/react-ideogram/mouse">Mouse</Link></li>
          <li><Link to="/react-ideogram/eukaryotes">Eukaryotes</Link></li>
        </ul>
      </div>
    );
  }
}