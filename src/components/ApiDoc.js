import React from 'react';

const ApiDoc = (props) => {
	return (
		<div className="ApiDoc__Component">
			<h5>{props.requestType}</h5>
			<h5>{props.requestHeadline}</h5>
			<div className="requestUrl">
				<h5>{props.requestUrl}</h5>
			</div>
		</div>
	);
}

export default ApiDoc;
