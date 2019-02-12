import React, { Component } from 'react';

class Login extends Component {

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
		})
	}

	handlePasswordChange = (event) => {
		this.setState({
			password: event.target.value
		})
	}

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.props.onLoginSubmit(this.state.username, this.state.password);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<label>
						Username
					</label>
					<input
						type="email"
						placeholder="Username"
						id="username"
						value={this.state.username}
						onChange={this.handleUsernameChange}
					/>
					<label>
						Password
					</label>
					<input
						type="password"
						placeholder="Password"
						id="password"
						value={this.state.password}
						onChange={this.handlePasswordChange}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Login;