import React from 'react';
import "../ApiDoc.scss";

const ApiDoc = (props) => {
	return (
		<div className="ApiDoc__Component">
			<div className="requestUrl">
				<h5>{props.requestType}</h5>
				<h5>{props.requestHeadline}</h5>
			</div>
			<h5>{props.requestUrl}</h5>
		</div>
	);
}

export default ApiDoc;
