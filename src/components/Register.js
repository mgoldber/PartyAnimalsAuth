import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationStatus: false
    }
  }

  async register() {
    console.log("Going to the registration");
    try {
      await axios.post('http://localhost:3005/v1/account/register', {
        email: `${this.props.username}`,
        password: `${this.props.password}`
      }).then(response => {
        if (response.status === 200) {
          this.setState({
            registrationStatus: true
          })
        }
      });
    } catch (error) {
      console.log('Error ' + error);
    }
  }

  renderRegistrationStatus() {
    return(<div><p>{this.state.registrationStatus}</p></div>)
  }

  renderEmptyState() {
    return (<div><p>Please complete your registration</p></div>)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.username && this.props.password && this.props.username !== prevProps.userName &&
      this.props.password !== prevProps.password) {
        this.register();
    }
  }

  render() {
    return (
      <div>
        <h2>Registration</h2>
      </div>
    )
  }
}

export default Register;
