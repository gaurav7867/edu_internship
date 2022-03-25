import React, { Component } from "react";

const url = "https://zomoapi.herokuapp.com/menuItem";

class PlaceOrder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			details: "",
		};
	}

	renderItems = (data) => {
        console.log(data)
		if (data) {
			return data.map((item) => {
				return (
					<div className='container' key={item.id}>
						<h1>{item.menu_name}</h1>
					</div>
				);
			});
		}
	};

	render() {
		return (
			<div className='container'>
				<div className='panel panel-info'>
					<div className='panel-heading'>
						<h2>Your Order From {this.props.match.params.restName} is below</h2>
					</div>
					<div className='panel-body'>
						{this.renderItems(this.state.details)}
					</div>
				</div>
			</div>
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
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(orderId),
		})
			.then((response) => response.json())
			.then((data) => this.setState({details:data}));
	}
}

export default PlaceOrder;
