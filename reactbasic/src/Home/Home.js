import React from 'react';
import Search from './Search';
import QuickApi from './QuickApi';
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = () => {
    return(
        <div id ="main">
            <Search/>
            <QuickApi/>
            <Footer/>     
        </div>
    )
}

export default Home;