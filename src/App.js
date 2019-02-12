import React, { Component } from 'react';
import Header from './components/Header.js';
import Login from './components/Login.js';
import AuthDetail from './components/AuthDetail.js';
import Footer from './components/Footer.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onLoginSubmit = (username, password) => {
    this.setState({
      username: username,
      password: password
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Login onLoginSubmit={this.onLoginSubmit}/>
        <AuthDetail username={this.state.username} password={this.state.password} />
        <Footer />
      </div>
    );
  }
}

export default App;
