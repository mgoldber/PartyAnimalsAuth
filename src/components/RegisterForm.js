import React, { Component } from 'react';

class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onRegisterSubmit(this.state.username, this.state.password);
  }

  render() {
    return (
      <div>
        <h4>Register</h4>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Username
          </label>
          <input
            type="email"
            placeholder="Username"
            id="usernameRegister"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <label>
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            id="passwordRegister"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm;
