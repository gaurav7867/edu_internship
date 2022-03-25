import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Listing from './listing/listingApi';
import Home from './Home/Home';
import RestDetails from './details/restDetails';
// import MenuList from "./Menu/menuApi"
import PlaceOrder from './Booking/PlaceOrder'


const Routing = () => {
    return(
        <BrowserRouter >
            <Route exact path="/" component={Home}/>
            <Route exact path="/listing" component={Listing}/>
            <Route path="/list/:mealId" component={Listing}/>
            <Route path ="/details/:restId" component={RestDetails}/>
            <Route path ="/placeOrder/:restName" component={PlaceOrder}/>
            {/* <Route path ="/menu/: restId" component={MenuList}/> */}
        </BrowserRouter>
    )
}

export default Routing;