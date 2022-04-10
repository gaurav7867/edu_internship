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

	deleteItem = (id) => {
		// console.log(">>> deleteItem >>>",id);
		// console.log(this.OrderId.indexOf(id))
		this.OrderId.splice(this.OrderId.indexOf(id.toString()), 1);
		this.props.finalOrder(this.OrderId);
	};

	renderMenu = ({ menuData }) => {
		// console.log(menuData);
		if (menuData) {
			return menuData.map((item) => {
				return (
					<div key={item.menu_id} className='menu-display'>
						<div>
							<b>{item.menu_id}</b>
							<img
								src={item.menu_image}
								style={{ height: "100px", width: "100px", marginLeft: "10px" }}
								alt='menuImage'
							/>
						</div>
						<div className='menu-details'>
							<h2 style={{ marginRight: "50px" }}> {item.menu_name}</h2>
							<h3>{item.menu_price}</h3>
						</div>
						<div>
							<button
								className='btn btn-primary m'
								onClick={() => this.placeOrder(item.menu_id)}
								style={{ marginRight: "7px" }}
							>
								ADD
							</button>
							<button
								className='btn btn-danger '
								onClick={() => this.deleteItem(item.menu_id)}
							>
								DELETE
							</button>
						</div>
					</div>
				);
			});
		}
	};

	renderCart = (orders) => {
		if (orders) {
			return orders.map((item, index) => {
				return <b key={index}>{item}  &nbsp; </b>
			});
		}
	};

	render() {
		// console.log(" >>>MenuDisplay", this.props);
		return (
			<div>
				<div className='col-md-12 bg-success'>
					<h2>Item Added</h2>
					<span>
						Items Number &nbsp;
						<span style={{ color: "black", fontSize: "14px",fontWeight:"bold" }}>
							{this.renderCart(this.OrderId)} 
						</span>  
						added.
					</span>
				</div>
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
