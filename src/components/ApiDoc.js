import React from 'react';

const ApiDoc = (props) => {
	return (
		<div className="ApiDoc__Component">
			<h5 className="requestHeadline">{props.requestHeadline}</h5>
			<div className="requestUrlContainer">
				<h5 className="requestType">{props.requestType}</h5>
				<h5 className="requestURL">{props.requestUrl}</h5>
			</div>
			<h5>Parameters:</h5>
			<table>
				<thead>
					<tr>
						<th>Parameter</th>
						<th>Value</th>
						<th>Description</th>
						<th className="unseen">Data Type</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.propOneParam}</td>
						<td>{props.propOneVal}</td>
						<td>{props.propOneDescription}</td>
						<td className="unseen">{props.propOneDType}</td>
					</tr>
					<tr>
						<td>{props.propTwoParam}</td>
						<td>{props.propTwoVal}</td>
						<td>{props.propTwoDescription}</td>
						<td className="unseen">{props.propTwoDType}</td>
					</tr>
				</tbody>
			</table>
			<h5>Sample Response</h5>
			<p>{`{Test: myTest}`}</p>
		</div>
	);
}

export default ApiDoc;
