import React,{Component} from 'react'
import Header from '../Header/Header';
import "./login.css";

const url = "http://localhost:5000/api/auth/login";

 class Login extends Component {
     constructor(props) {
         super(props)
            this.state = {
                email: "",
                password: "",
				message: "",
            };      
     }

     handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	handleSubmit = (e) => {
        e.preventDefault()
		fetch(url, {
			method: "POST",
			headers: {
				'Accept': "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(this.state),
		})
		.then((res) => res.json())
		.then((data) => {
			if(data.auth === false) {
				this.setState({message:data.token})
			}else {
				sessionStorage.setItem("token", data.token)
				this.props.history.push('/')
			}
		});
	};

     render() {
        return (
			<>
				<Header />
				<div className='container login-body'>
					<div className='panel panel-success '>
						<div className='panel-heading ' style={{ marginTop: "10px" ,textAlign: "center" }}>
							<h2>Please Login ! 🔌</h2>
						</div>
						<div className='row' style={{ marginTop: "20px"}}>
							<div className='col-md-12 my-5'>
							 <h4 style={{color:"red",marginLeft:"20px"}}>{this.state.message}</h4>					
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
								Login
							</button>
						</div>
					</div>
				</div>
			</>
		);
     }
 }   
export default Login;