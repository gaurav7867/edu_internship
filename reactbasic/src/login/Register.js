import React, { Component } from "react";
import "./register.css";
import Header from "../Header/Header";

const url = "http://localhost:5000/api/auth/register";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: " ",
			phone: "",
			email: "",
			password: "",
			message: "",
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = () => {
		fetch(url, {
				method: "POST",
				headers: {
					'Accept': "application/json",
					'Content-Type': "application/json",
				},
			    body: JSON.stringify(this.state),
		})
		.then((response) =>response.json())
		.then((data) => {
			if(data.auth ===  false){
				this.setState({message: data.token})
			 }else {
				 this.setState({message: data.message})
				 this.props.history.push("/login")
			 }
		})
	};

	render() {
		return (
			<>
				<Header />
				<div className='container  register-body'>
					<div className='panel panel-warning'>
						<div className='panel-heading ' style={{ marginTop: "10px" ,textAlign: "center" }}>
							<h2>Please Register ! 🙋🏼‍♂️</h2>
						</div>
						<div className='row' style={{ marginTop: "20px"}}>
						<h4 style={{color:"red",marginLeft:"20px"}}>{this.state.message}</h4>
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
										<label>Password:</label>
										<input
											type='password'
											name='password'
											value={this.state.password}
											className='form-control'
											onChange={this.handleChange}
										/>
									</div>
								</div>
							</div>
						</div>

						<div style={{ marginLeft: "30px", marginBottom: "10px" }}>
							<button className='btn btn-success' onClick={this.handleSubmit}>
								Register
							</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Register;
