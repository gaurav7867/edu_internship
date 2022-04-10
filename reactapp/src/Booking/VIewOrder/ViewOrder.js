import React, { Component } from "react";
import Header from "../../Header/Header";
import ViewDisplay from "./ViewOrderDisplay";
import axios from "axios";

const url = "https://zomoapi.herokuapp.com/viewOrder";

export default class ViewOrder extends Component {
	constructor() {
		super();

		this.state = {
			orders: " ",
		};
	}

	render() {
		return (
			<>
				<Header />
				<ViewDisplay  orderData = {this.state.orders}/>
			</>
		);
	}

	// Get Orders Data
	componentDidMount() {
		axios.get(url).then((response) => {
			this.setState({ orders: response.data });
		});
	}
}
