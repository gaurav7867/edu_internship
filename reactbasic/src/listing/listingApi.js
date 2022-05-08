import React, { Component } from "react";
import axios from "axios";
import ListingDisplay from "./listingDisplay";
import Header from "../Header/Header"
import "./listing.css";
import CuisineFilter from "../filters/cusineFilter";
import CostFilter from "../filters/costFilter";

const url = "https://zomoapi.herokuapp.com/restaurant?mealtype_id=";
class Listing extends Component {
	constructor(props) {
		super();
		this.state = {
			restaurantList: "",
		};
	}

	setAsPerCuisine = (SortedData) => {
		console.log("sortedData",SortedData)
		this.setState({restaurantList:SortedData})

	}
	render() {
		return (
			<div className='row'>
				<Header/>
				<div id='mainListing'>
					<div id='filter'>
							<span>Filter</span>
							<input type='radio' />
							Female
							<input type='radio' />
							Male
							<hr />
				           <CuisineFilter restPerCuisine ={(data)=>{this.setAsPerCuisine(data)}}/>
						   <hr/>
						   <CostFilter restPerCost ={(data)=>{this.setAsPerCuisine(data)}} />
						   <hr/>
					</div>
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
