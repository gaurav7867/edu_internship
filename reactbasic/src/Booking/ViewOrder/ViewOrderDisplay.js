import React from "react";
import "./viewOrderStyle.css";

const ViewOrderDisplay = (props) => {

		const renderOrderTable = ({ orderData }) => {
			if (orderData) {
				return orderData.map((item) => {
					const { address, email, name, phone, rest_Name, total_Amount, status } = item;
					return (
						<tr>
							<td>{rest_Name}</td>
							<td>{name}</td>
							<td>{phone}</td>
							<td>{email}</td>
							<td>{address}</td>
							<td>{total_Amount}</td>
							<td>{status}</td>
						</tr>
					)
				})
			}
		};

	return (
		<div>
			<center>
				<h3>Your Orders</h3>
			</center>
			<table className='table'>
				<thead>
					<tr>
						<th>Restaurant Name</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Address</th>
						<th>Price</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>{renderOrderTable(props)}</tbody>
			</table>
		</div>
	);
};

export default ViewOrderDisplay;
