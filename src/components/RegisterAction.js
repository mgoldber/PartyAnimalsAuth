import React, { Component } from 'react';
import axios from 'axios';

class RegisterAction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      registrationStatus: false
    }
  }

  async register() {
    try {
      await axios.post('http://localhost:3005/v1/account/register', {
        email: `${this.props.usernameRegister}`,
        password: `${this.props.passwordRegister}`
      }).then(response => {
        if (response.status === 200) {
          this.setState({
            registrationStatus: true
          });
        }
      });
    } catch (error) {
      console.log('Error ' + error);
    }
  }

  renderRegisterDetails() {
    return(<div></div>)
  }

  renderEmptyState() {
    return(<div><p>Please complete your registration to be able to login</p></div>)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.usernameRegister && this.props.passwordRegister && this.props.usernameRegister !== prevProps.usernameRegister &&
      this.props.passwordRegister !== prevProps.passwordRegister) {
      this.register();
    }
  }

  render() {
    return (
      <div className="display-none">
      </div>
    )
  }

}

export default RegisterAction;
