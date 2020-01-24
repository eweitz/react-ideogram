import React from 'react';
import Overview from './Overview';
import IdeogramHuman from './IdeogramHuman';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Overview</Link>
            </li>
            <li>
              <Link to="/human">Human</Link>
            </li>
            {/* <li>
              <Link to="/Eukaryotes">Eukaryotes</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Overview />
          </Route>
          <Route path="/human" component={IdeogramHuman} />
          {/* <Route path="/Eukaryotes">
            <Eukaryotes />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}