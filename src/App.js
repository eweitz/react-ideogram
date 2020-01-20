import React, { Component } from 'react';
import Header from './Header';
import './App.css';

import Ideogram from 'ideogram';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <IdeogramComponent/>
      </div>
    );
  }
}

class IdeogramComponent extends Component {

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

export default App;