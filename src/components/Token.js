import React, { Component } from 'react';
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
			await axios.post('https://partyanimals.hackeryou.com/api/v1/account/login', {
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
		return (<div><p className="token-details">{this.state.authToken}</p></div>)
	}

	renderEmptyState() {
		return(<div><p className="token-details">Please complete your login to see your auth token</p></div>)
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.usernameLogin && this.props.passwordLogin && this.props.usernameLogin !== prevProps.usernameLogin &&
			this.props.passwordLogin !== prevProps.passwordLogin) {
			this.logIn();
		}
	}

	render() {
		return (
			<div className="Token__Component wrapper">
				<h2>Token Details</h2>
				{this.props.usernameLogin ? this.renderTokenDetails() : this.renderEmptyState()}
			</div>
		);
	}
};

export default Token;
