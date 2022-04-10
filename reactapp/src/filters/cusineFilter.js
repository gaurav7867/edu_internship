import React, { Component } from "react";
import axios from "axios";
import "./cuisineFilter.css"

const url = "https://zomoapi.herokuapp.com/filter";

class cusineFilter extends Component {

	filterCuisine = (event) =>{
		console.log(event.target.value)
    let mealId = sessionStorage.getItem('mealId');
	let cuisineId = event.target.value;
	let filterUrl;
	if(cuisineId == ""){
		filterUrl = `${url}/${mealId}`;
	}else{
		filterUrl = `${url}/${mealId}?cuisine=${cuisineId}`;
	}
	 axios.get(filterUrl)
	 .then((res) => {this.props.restPerCuisine(res.data)})
	}
	
	render() {
		return (
			<>
				<center>
					<h3>Cuisine Filter</h3>
				</center>
				<div className=" cuisineFilter" onChange ={this.filterCuisine}>
					<label className='radio'>
						<input type='radio' name='cuisine' value='' />All
					</label>
					<label className='radio'>
						<input type='radio' name='cuisine' value='1' />North Indian
					</label>
					<label className='radio'>
						<input type='radio' name='cuisine' value='2' />South Indian
					</label>
					<label className='radio'>
						<input type='radio' name='cuisine' value='3' />Chinese
					</label>
					<label className='radio'>
						<input type='radio' name='cuisine' value='4' />Fast Food
					</label>
					<label className='radio'>
						<input type='radio' name='cuisine' value='5' />Street Food
					</label>
				</div>
			</>
		);
	}
}

export default cusineFilter;
