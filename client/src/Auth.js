import React, { Component } from 'react';
// import CardList from '../../components/CardList/CardList';
// import Nav from '../../components/Nav/Nav';
// import './Archive.css';
// import '../../components/Footer/Footer.css'
// import Twitter from '../../images/twitter.svg'
// import Facebook from '../../images/facebook.svg'
// import Logo from '../../components/Logo/Logo'

class Auth extends Component {
  render() {
    return (
      <div>
           <button type="button" href="/app">Login with Spotify</button> 
      </div>
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
}

export default Auth;
