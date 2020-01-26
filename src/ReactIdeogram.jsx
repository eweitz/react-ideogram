import React, { Component } from 'react';

import Ideogram from 'ideogram';

export default class ReactIdeogram extends Component {

  createIdeogram() {
    new Ideogram({
      organism: this.props.organism,
      dataDir: 'https://unpkg.com/ideogram@1.16.0/dist/data/bands/native/',
      container: '#ideo-container'
    });
  }

  componentDidUpdate() {
    return this.createIdeogram();
  }

  componentDidMount() {
    return this.createIdeogram();
  }

  render() {
    return (
      <div id="ideo-container"></div>
    );
  }
}