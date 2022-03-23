import React, { Component } from "react";
import axios from "axios";
import "./restDetails.css";
import Header from "../Header/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuDisplay from "./menuDisplay";

const url = "https://zomoapi.herokuapp.com/details";
const menu = "https://zomoapi.herokuapp.com/menu";

class Details extends Component {
	constructor() {
		super();

		this.state = {
			details: " ",
			menuList: ""
		};
	}
	render() {
		let details = this.state.details;
		// let {details} = this.state;
		return (
			<>
				<Header />
				<div className='container-fluid' style={{ marginTop: "20px" }}>
					<div className='panel panel-primary'>
						<div className='panel-heading'>
							<h3>{details.restaurant_name}</h3>
						</div>
						<div className='panel-body'>
							<img
								src={details.restaurant_thumb}
								alt=''
								className='img-responsive'
							/>
							<button
								type='button'
								className='btn btn-danger galButton'
								data-toggle='modal'
								data-target='#myModal'
							>
								Click To See Image Gallery
							</button>

							<div className='modal fade' id='myModal' role='dialog'>
								<div className='modal-dialog modal-lg'>
									<div className='modal-content'>
										<div className='modal-header'>
											<button
												type='button'
												className='close'
												data-dismiss='modal'
											>
												×
											</button>
											<h4 className='modal-title'>Modal Header</h4>
										</div>
										<div className='modal-body'>
											<p>This is a large modal.</p>
										</div>
										<div className='modal-footer'>
											<button
												type='button'
												className='btn btn-default'
												data-dismiss='modal'
											>
												Close
											</button>
										</div>
									</div>
								</div>
							</div>
							<h2>{details.restaurant_name}</h2>
							<span>{details.average_rating}</span>
							<p>{details.rating_text}</p>
                            <hr/>
							<Tabs>
								<TabList>
									<Tab>Details</Tab>
									<Tab>Contact</Tab>
									<Tab>Menu</Tab>
								</TabList>

								<TabPanel>
									<p>{details.restaurant_name} is the name of the restaurant to be served by the client.</p>
								</TabPanel>
								<TabPanel>
									<h2>{details.contact_number}</h2>
								</TabPanel>
								<TabPanel>							
									<MenuDisplay menudata ={this.state.menuList}/>
								</TabPanel>
							</Tabs>
						</div>
					</div>
				</div>
			</>
		);
	}

	//  calling api
	async componentDidMount() {
		let restId = this.props.match.params.restId;
		let response = await axios.get(`${url}/${restId}`);
		let menuData = await axios.get(`${menu}/${restId}`);
		// console.log(menuData.data);		
		// console.log(response.data);
		this.setState({ details: response.data[0], menuList:menuData.data });
	}
}
export default Details;
