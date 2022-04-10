import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Search.css";

const locationUrl = "https://zomoapi.herokuapp.com/location";
const restUrl = "https://zomoapi.herokuapp.com/restaurant?state_id=1";

class Search extends Component {
	constructor(props) {
		super();
		this.state = {
			location: "",
			restaurant: "",
		};
	}
	renderCity = (data) => {
		// console.log("city",data);
		if (data) {
			return data.map((item) => {
				return (
					<option value={item.state_id} key={item.state_id}>
						{item.state}
					</option>
				);
			});
		}
	};
	renderRestaurants = (data) => {
		// console.log("Rest",data);
		if (data) {
			return data.map((item) => {
				console.log(item.restaurant_thumb)
				return (
					<option key={item.restaurant_id} value= {item.restaurant_id}>
                    {item.restaurant_name}|{item.address}
					</option>
				);
			});
		}
		else{
			return(
				<div>
					<h3>Loading...</h3>
				</div>
			)
		}
	};
	handleCity = (event) => {
		const stateId = event.target.value;
		fetch(`${restUrl}${stateId}`, { method: "GET" })
			.then((res) => res.json())
			.then((data) => {
				this.setState({ restaurant: data });
			});
	};

	handleRest = (event) => {
		console.log(event.target.value);
		this.props.history.push(`/details/${ event.target.value}`);
		
	}

	render() {
		// console.log(this.state.restaurant);
		return (
			<div id='search'>
				<span id='Zlogo'>Zomato</span>
				<p id='demo'></p>
				<div id='login'>
					<br />
					<br />
					<a href='/Zomato/LoginForm/login.html' target='self'>
						Login
					</a>
					&nbsp;
					<a href='loginForm/SingnUp.html' target='self'>
						Create Account
					</a>
				</div>
				<div className='bike'>
					<img
						src='https://i.ibb.co/PwyHMMf/bike.png'
						style={{ height: "80px", width: "80px" }}
						alt='bike'
					/>
				</div>

				<div id='logo'>
					<span>z!</span>
				</div>
				<div id='find'>
					Find Your The Best Restaurants,Cafe and Bars
					<span id='usercity'></span>
				</div>
				<div className='dropdown'>
					<select id='city' onChange={this.handleCity}>
						<option>---Select Location---</option>
						{this.renderCity(this.state.location)}
					</select>

					<select id='restaurants' onChange={this.handleRest}>
						{this.renderRestaurants(this.state.restaurant)}
					</select>
				</div>
			</div>
		);
	}
	
	componentDidMount() {
		fetch(locationUrl, { method: "GET" })
			.then((res) => res.json())
			.then((data) => {
				this.setState({ location: data });
			});
	}
}

export default withRouter(Search);
