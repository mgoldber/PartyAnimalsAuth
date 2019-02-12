import React, { Component } from 'react';
import Header from './components/Header.js';
import Login from './components/Login.js';
import AuthDetail from './components/AuthDetail.js';
import ApiDoc from './components/ApiDoc.js';
import Footer from './components/Footer.js';
import './App.scss';

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
        <h3>Venue</h3>
        <ApiDoc
          requestType="GET"
          requestHeadline="Get All Venues"
          requestUrl="http://localhost:3005/v1/venue/"
        />
        <ApiDoc
          requestType="GET"
          requestHeadline="Get Venue By ID"
          requestUrl="http://localhost:3005/v1/venue/${id}"
        />
        <h3>Animal</h3>
        <Footer />
      </div>
    );
  }
}

export default App;
