import React, { Component } from "react";
import "./placeOrder.css";
import Header from "../Header/Header";

const url = "https://zomoapi.herokuapp.com/menuItem";
const PostUrl = "https://zomoapi.herokuapp.com/placeOrder";

class PlaceOrder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: " ",
			phone: "",
			email: "",
			address: "",
			total_Amount: "",
			status: "Pending",
			rest_Name: this.props.match.params.restName,
			details: "",
		};
	}

	handleChange = (event) => {
		// console.log(event.target.value)
		this.setState({[event.target.name]: event.target.value });

	}
	handleSubmit = ()=>{
		// console.log(this.state)
		fetch(PostUrl ,{
			method: 'POST',
			headers: {
				'Accept': "application/json",
				'Content-Type':'application/json'
			},
			body: JSON.stringify(this.state)
		})
		.then(this.props.history.push("/viewOrder"))
	}

	renderItems = (data) => {
		// console.log(data);
		if (data) {
			return data.map((item) => {
				return (
					<>
						<div className='card-body' key={item.id}>
							<div>
								<div className='img-box'>
									<img
										src={item.menu_image} alt ={item.menu_name}
									/>
								</div>
								<div className='details'>
									<h3>{item.menu_name}</h3>
									<span>&#8360;.{item.menu_price}</span>
									<span>{item.menu_type}</span>
									{/* <p>{item.description}</p> */}
								</div>
								<div className='buttons-box '>
									<button className='btn btn-success incre'>+</button>
									<button className='btn btn-primary decre'>-</button>
								</div>
							</div>
						</div>
					</>
				);
			});
		} else {
			return <h2>Loading...</h2>;
		}
	};

	render() {
		return (
			<>
				<Header />			
				<div className='container-fluid'>
					<div className='panel panel-info'>
						<div className='panel-heading ' style={{ marginTop: "10px" }}>
							<h2>
								Your Order From {this.props.match.params.restName} is below
							</h2>
						</div>
					<div className='row'>
						<div className='col-md-12 my-5'>
							<div className='col-md-6'>
								<div className='form-group'>
									<label>Name:</label>
									<input
										type='text'
										name='name'
										value={this.state.name}
										className='form-control'
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<label>Email:</label>
									<input
										type='text'
										name='email'
										value={this.state.email}
										className='form-control'
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<label>Phone:</label>
									<input
										type='phone'
										name='phone'
										value={this.state.phone}
										className='form-control'
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className='col-md-6'>
								<div className='form-group'>
									<label>Address:</label>
									<textarea
										type='text'
										name='address'
										value={this.state.address}
										className='form-control'
										onChange={this.handleChange}
									/>
								</div>
							</div>				
						</div>
				    </div>
						<div className='panel-body'>
							{this.renderItems(this.state.details)}
						</div>
					<h1 style={{marginLeft:'30px'}}>Total Cost is Rs. {this.state.total_Amount}</h1>
					<div style={{marginLeft:"30px",marginBottom:"10px"}}>
				         	<button className='btn btn-success' onClick ={this.handleSubmit}>Checkout</button>
						</div>
					</div>
				</div>
				
			</>
		);
	}

	componentDidMount() {
		var menuItem = sessionStorage.getItem("menu");
		var orderId = [];
		menuItem.split(",").map((item) => {
			orderId.push(parseInt(item));
			return "Ok";
		});
		fetch(url, {
			method: "POST",
			headers: {
				'Accept': "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(orderId),
		})
			.then((response) => response.json())
			.then((data) => {
				var TotalPrice = 0;
				data.map((item) => {
					TotalPrice = TotalPrice + parseInt(item.menu_price);
				});
				this.setState({ details: data, total_Amount: TotalPrice });
			});
	}
}

export default PlaceOrder;
