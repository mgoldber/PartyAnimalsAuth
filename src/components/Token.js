import React, { Component } from 'react';
import '../styles/Token.scss';
import axios from 'axios';

class Token extends Component {

	constructor(props) {
		super(props);
		this.state = {
			authToken: ''
		}
	}

	async logIn() {
		try {
			await axios.post('http://localhost:3005/v1/account/login', {
				email: `${this.props.usernameLogin}`,
				password: `${this.props.passwordLogin}`
			}).then(response => {
				this.setState({
					authToken: response.data.token
				})
			});
		} catch (error) {
			console.log('Error ' + error);
		}
	}

	renderTokenDetails() {
		return (<div><p>{this.state.authToken}</p></div>)
	}

	renderEmptyState() {
		return(<div><p>Please complete your login to see your auth token</p></div>)
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.usernameLogin && this.props.passwordLogin && this.props.usernameLogin !== prevProps.usernameLogin &&
			this.props.passwordLogin !== prevProps.passwordLogin) {
			this.logIn();
		}
	}

	render() {
		return (
			<div>
				<h2>Token Details</h2>
				{this.props.usernameLogin ? this.renderTokenDetails() : this.renderEmptyState()}
			</div>
		);
	}
};

export default Token;
