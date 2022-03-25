import React, { Component } from "react";
import "./menuItem.css";
import { withRouter } from "react-router-dom";

class menuDisplay extends Component {
	constructor(props) {
		super(props);

		this.state = {
			orders: [],
		};
	}

	OrderId = [];
	placeOrder = (id) => {
		this.OrderId.push(`${id}`);
		this.props.finalOrder(this.OrderId);
		// console.log(">>> placeOrder >>>",this.OrderId);
	};

	renderMenu = ({ menuData }) => {
		console.log(menuData);

		if (menuData) {
			return menuData.map((item) => {
				return (
					<div key = {item.menu_id}>
						<div className='col-md-8'>
							<img
								src={item.menu_image}
								style={{ height: "80px", width: "80px" }}
								alt ="menuImage"
							/>
							&nbsp;&nbsp; {item.menu_name} - {item.menu_price}
						</div>
						<div className='col-md-4'>
							<button
								className='btn btn-primary'
								onClick={() => this.placeOrder(item.menu_id)}
							>
								ADD
							</button>
						</div>
						<br />
					</div>
				);
			});
		}
	};

	render() {
		// console.log(" >>>MenuDisplay", this.props);
		return (
			<div>
				<div className='col-md-12 bg-info'>{this.renderMenu(this.props)}</div>
			</div>
		);
	}
}

export default withRouter(menuDisplay);



















// <table className='table'>
// 	<thead className='table-responsive' style ={{backgroundColor:"black", color:"white"}}>
// 		<tr>
// 			<th scope='col'>S No.</th>
// 			<th scope='col'>Image</th>
// 			<th scope='col'>Name</th>
// 			<th scope='col'>Menu Type</th>
// 			<th scope='col'>Description</th>
// 			<th scope='col'>Price</th>
// 			<th scope='col'>Action</th>
// 			<th scope='col'></th>
// 		</tr>
// 	</thead>
{
	/* <tbody>
				return menuData.map((item) => {
				return (
					<tr>
						<th scope='row' id='serial-no'>
							{index + 1}
						</th>
						<td>
							<img
								src={item.menu_image}
								alt='menu-Image'
								className='menu-Image'
							/>
						</td>
						<td id='menuName' className='t-data'>
							{item.menu_name}
						</td>
						<td className='t-data'>{item.menu_type}</td>
						<td className='t-data'>{item.description}</td>
						<td className='t-data'>{`${item.menu_price}`}</td>
						<button className='btn btn-success my-5'>ADD</button>
					</tr>
				);
			}
					
				</tbody> */
}

// </table>
