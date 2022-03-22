import React, { Component } from "react";
import axios from "axios";
import ListingDisplay from "./listingDisplay";

const url = "https://zomoapi.herokuapp.com/restaurant?mealtype_id=";
class Listing extends Component {
	constructor(props) {
		super();
		this.state = {
			restaurantList: "",
		};
	}
	render() {
		return (
			<div className='row'>
				<div id='mainListing'>
					<ListingDisplay listData={this.state.restaurantList} />
				</div>
			</div>
		);
	}
	// callapi
	componentDidMount() {
		let mealId = this.props.match.params.mealId;
		console.log(mealId);
		sessionStorage.setItem("mealId", mealId);
		axios.get(`${url}${mealId}`).then((res) => {
			// console.log(res.data)
			this.setState({ restaurantList: res.data });
		});
	}
}

export default Listing;
