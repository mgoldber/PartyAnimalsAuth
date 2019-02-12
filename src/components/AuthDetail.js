import React, { Component } from 'react';
import axios from 'axios';

class AuthDetail extends Component {

	async logIn() {
		try {
			await axios.post('http://localhost:3005/v1/account/login', {
				email: `${this.props.username}`,
				password: `${this.props.password}`
			}).then(function(response) {
				console.log(response);
			});
		} catch (error) {

		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.username && this.props.password && this.props.username !== prevProps.username) {
			this.logIn();
		}
	}

	render() {
		return (
			<div>
				<p>Helloooo</p>
				<p>{this.props.username}</p>
				<p>{this.props.password}</p>
			</div>
		);
	}
};

export default AuthDetail;