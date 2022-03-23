import React from "react";
import "./menuItem.css";

const menuDisplay = ({ menudata }) => {
	// console.log(menudata)
	return (
		<>
			<table className='table'>
				<thead className='table-responsive' style ={{backgroundColor:"black", color:"white"}}>
					<tr>
						<th scope='col'>S No.</th>
						<th scope='col'>Name</th>
						<th scope='col'>Menu Type</th>
						<th scope='col'>Description</th>
						<th scope='col'>Price</th>
						<th scope='col'>Image</th>
					</tr>
				</thead>
				<tbody>
					{menudata.map((item, index) => {
						console.log(item);
						return (
							<tr>
								<th scope='row' id ="serial-no">{index + 1}</th>
								<td id = "menuName" className ="t-data">{item.menu_name}</td>
								<td className ="t-data">{item.menu_type}</td>
								<td className ="t-data">{item.description}</td>
								<td className ="t-data">{`${item.menu_price}`}</td>
								<td>
									<img src={item.menu_image} alt='menu-Image' className='menu-Image' />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default menuDisplay;
