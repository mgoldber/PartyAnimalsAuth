import React from 'react';

const ApiDoc = (props) => {
	return (
		<div className="ApiDoc__Component">
			<h5 className="requestHeadline">{props.requestHeadline}</h5>
			<div className="requestUrlContainer">
				<h5 className="requestType">{props.requestType}</h5>
				<h5 className="requestURL">{props.requestUrl}</h5>
			</div>
		</div>
	);
}

export default ApiDoc;
