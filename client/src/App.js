import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import logo from './logo.svg';
import Auth from './Auth.js';
import './App.css';

class App extends Component {

  state = {
    response: '',
    post: '',
    responseToPost: 'default reponse',
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/login');
    //const body = await response.json();
    if (response.status !== 200) throw Error("Error");
    return "success";
  };

  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/login/" />
            {/* <Route exact path="/archive" render={(props) => <Archive {...props} tracks={trackList.tracks} />} />
            <Route exact path="/:trackno" component={TrackFinder} />
            <Route component={NoMatch} /> */}
          </Switch>
        </BrowserRouter>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default App;