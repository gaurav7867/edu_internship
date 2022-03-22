import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<header id='header'>
				<div id='logo_main'>
					<Link to='/' className='link-box'>
						<h1 id='headingListing'>E!</h1>
					</Link>
				</div>
			</header>
		</div>
	);
};

export default Header;
