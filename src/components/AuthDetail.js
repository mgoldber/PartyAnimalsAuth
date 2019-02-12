import React, { Component } from 'react';
import axios from 'axios';

class AuthDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			authToken: ''
		}
	}

	async logIn() {
		try {
			await axios.post('http://localhost:3005/v1/account/login', {
				email: `${this.props.username}`,
				password: `${this.props.password}`
			}).then(response => {
				console.log(response);
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
		return(<div><p>Please complete your login to see your token</p></div>)
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.username && this.props.password && this.props.username !== prevProps.username &&
			this.props.password !== prevProps.password) {
			this.logIn();
		}
	}

	render() {
		return (
			<div>
				<h2>Token Details</h2>
				{this.props.username ? this.renderTokenDetails() : this.renderEmptyState()}
			</div>
		);
	}
};

export default AuthDetail;
