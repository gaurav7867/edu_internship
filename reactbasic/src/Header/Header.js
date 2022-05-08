import React,{Component} from "react";
import "./Header.css";
import { Link,withRouter} from "react-router-dom";

const url ="http://localhost:5000/api/auth/userInfo";

class Header extends Component {
	constructor() {
		super();
		this.state = {
			userData:""
		}
	}
    hamdleLogout = () =>{
		this.setState({userData:""})
		sessionStorage.removeItem('ltk');
		sessionStorage.removeItem('userData');
		this.props.history.push('/');
	}
	conditionalHeader = () => {
		if(this.state.userData.name){
		  let data = this.state.userData;
		  let outputArray = [data.name, data.email, data.phone, data.role];
		  sessionStorage.setItem("userData", outputArray);
		  return(
			<>
			  <div className="info">
				<h3 className="">{this.state.userData.name}</h3>
				<button className="btn btn-warning" onClick={this.handleLogout}>Logout</button>
			  </div>
			</>
		  )
		}else{
		  <>
		    <Link to = "/register">
				<button className='btn btn-warning' style ={{marginRight:"10px"}}>
					<span><i className='fas fa-user-alt'></i></span>
					<span style ={{marginLeft: '5px'}}>SignUp</span>
				</button>
			</Link>
			<Link to = "/login">
				<button className='btn btn-success'>
					<span><i className='glyphicon glyphicon-log-in'></i></span>
					<span style ={{marginLeft: '5px'}}>Login</span>
				</button>					
			</Link>
			
		  </>
		}
	}

	render(){
		return (
			<>
				<header id='header'>
					<div id='logo_main'>
						<Link to='/' className='link-box'>
							<h1 id='headingListing'>E!</h1>
						</Link>
						<Link to='/viewOrder' className=''>Orders</Link>
					</div>
					<div className="crendential-box">
						{this.conditionalHeader()}
					</div>
				</header>
			</>
		);
	}

	componentDidMount() {
		fetch(url , { 
			method: 'GET',
			headers:{
				'x-access-token':sessionStorage.getItem('ltk')
			}
		})
		.then((res) => res.json())
		.then((data) =>{
			// console.log("data",data);
			this.setState({
				userData:data
			})
		})
	}
}
export default withRouter(Header);
