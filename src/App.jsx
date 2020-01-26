import React from 'react';
import Overview from './Overview';
import IdeogramHuman from './IdeogramHuman';
import IdeogramMouse from './IdeogramMouse';
import IdeogramEukaryotes from './IdeogramEukaryotes';
import './App.css';

import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/react-ideogram">
            <Overview />
          </Route>
          <Route path="/react-ideogram/human" component={IdeogramHuman} />
          <Route path="/react-ideogram/mouse" component={IdeogramMouse} />
          <Route path="/react-ideogram/eukaryotes" component={IdeogramEukaryotes} />
          {/* <Route path="/Eukaryotes">
            <Eukaryotes />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}