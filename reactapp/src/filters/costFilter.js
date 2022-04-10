import React, { Component } from "react";
import axios from "axios";

const url = "https://zomoapi.herokuapp.com/filter";

class costFilter extends Component {

    filterCost = (event) =>{
    // console.log(event.taget.value)
    let mealId = sessionStorage.getItem('mealId');
	let cost = (event.target.value).split("-");
    let lcost = cost[0];
    let hcost = cost[1];
	let filterUrl;
	if(event.target.value == ""){
		filterUrl = `${url}/${mealId}`;
	}else{
		filterUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`;
	}
	 axios.get(filterUrl)
	 .then((res) => {this.props.restPerCost(res.data)})
	}
	render() {
		return (
			<>
				<center>
					<h3>Cost Filter</h3>
				</center>
				<div className=" costFilter" style={{marginLeft:"30px"}} onChange = {this.filterCost}>
					<label className='radio'>
						<input type='radio' name='cuisine' value='' />All
					</label>					
					<label className='radio'>
						<input type='radio' name='cuisine' value='200-400' />200-400
					</label>
					<label className='radio'>
						<input type='radio' name='cuisine' value='401-600' />400-600
					</label>
					<label className='radio'>
						<input type='radio' name='cuisine' value='601-1000' />600-1000
					</label>
					<label className='radio'>
						<input type='radio' name='cuisine' value='1001-1500' />1000-1500
					</label>
				</div>
			</>
		);
	}
}

export default costFilter;
