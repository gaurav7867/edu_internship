import React,{Component} from "react";
import './Search.css';


const locationurl =" ";
const restUrl = " ";

class Search extends Component {
  constructor(props) {
      super()

      this.state={
          location:'',
          restaurant:''
      }
  }

  renderCity = (data) => {
      if(data){
          return data.map((item) => {
              return(
                  <option value={item.state_id} key={item.state_id}>{item.state}</option>
              )
          })
      }
  }

  renderRestaurants = (data) => {
    if(data){
        return data.map((item) => {
            return(
            <option value={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
            )
        })
    }
}

  handleCity = (event) => {
      console.log(event.target.value)
      const stateId = event.target.value;
      fetch(`${restUrl}${stateId}`,{method:'GET'})
      .then((res) => res.json())
      .then((data) => {
          this.setState({restaurant:data})
      })
  }

  handleRest = (event) => {
      this.props.history.push(`/details/${event.target.value}`)
  }

render() {
  return (
    <div id="search">
      <span id="Zlogo">Zomato</span>
      <p id="demo"></p>
      <div id="login">
        <br /><br />
        <a href="#" target="self">Login</a>&nbsp;
        <a href="#" target="self">Create Account</a>
      </div>

      <div class="bike">
          <img src="image/bike.png" style={{height:'80', width:'80'}}/>
      </div>

      <div id="logo">
        <span>z!</span>
      </div>
      <div id="find">
        Find Your The Best Restaurants,Cafe and Bars.
      </div>

      <div class="dropdown">
        <select id="city" onChange={this.handleCity}>
          <option>---Select Location---</option>
          {this.renderCity(this.state.location)}
        </select>

        <select id="restaurants" onChange={this.handleRest}>
          <option>---Select Your Restaurant---</option>
          {this.renderRestaurants(this.state.restaurant)}
        </select>
      </div>
    </div>
  );
};

// on page load we have to call api
    componentDidMount(){
      fetch(locationUrl,{method:'GET'})
      .then((res) => res.json())
      .then((data) => {
        this.setState({location:data})
    })
  }
}


export default Search;
