import React, { Component } from 'react';
import Header from './components/Header.js';
import LoginForm from './components/LoginForm.js';
import RegisterForm from './components/RegisterForm.js';
import RegisterAction from './components/RegisterAction.js';
import Token from './components/Token.js';
import ApiDoc from './components/ApiDoc.js';
import Footer from './components/Footer.js';
import './styles/App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usernameLogin: '',
      usernameRegister: '',
      passwordLogin: '',
      passwordRegister: ''
    }
  }

  onLoginSubmit = (username, password) => {
    this.setState({
      usernameLogin: username,
      passwordLogin: password
    });
  }

  onRegisterSubmit = (username, password) => {
    this.setState({
      usernameRegister: username,
      passwordRegister: password
    });
  }

  render() {
    return (
      <div>
        <Header />
        <LoginForm onLoginSubmit={this.onLoginSubmit} />
        <RegisterForm onRegisterSubmit={this.onRegisterSubmit} />
        <RegisterAction usernameRegister={this.state.usernameRegister} passwordRegister={this.state.passwordRegister} />
        <Token usernameLogin={this.state.usernameLogin} passwordLogin={this.state.passwordLogin} />
        <h3>Venue</h3>
        <ApiDoc
          requestType="GET"
          requestHeadline="Get All Venues"
          requestUrl="http://localhost:3005/v1/venue/"
        />
        <ApiDoc
          requestType="GET"
          requestHeadline="Get Venue By ID"
          requestUrl="http://localhost:3005/v1/venue/id"
        />
        <h3>Animal</h3>
        <ApiDoc
          requestType="GET"
          requestHeadline="Get Animals for Specific Venue"
          requestUrl="http://localhost:3005/v1/venue/animals/id"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
