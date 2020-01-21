import React, { Component } from 'react';

import Ideogram from 'ideogram';

export default class ReactIdeogram extends Component {

  componentDidMount() {
    return new Ideogram({
      organism: 'human',
      dataDir: 'https://unpkg.com/ideogram@1.16.0/dist/data/bands/native/',
      container: '#ideo-container'
    });
  }

  render() {
    return (
      <div id="ideo-container"></div>
    );
  }
}