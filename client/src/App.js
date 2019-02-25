import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import logo from './logo.svg';
import Auth from './Auth.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Auth} />
            {/* <Route exact path="/archive" render={(props) => <Archive {...props} tracks={trackList.tracks} />} />
            <Route exact path="/:trackno" component={TrackFinder} />
            <Route component={NoMatch} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
