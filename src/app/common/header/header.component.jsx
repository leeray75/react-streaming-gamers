import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
class Header extends Component {
	constructor(props) {
		super(props);
		console.log("[Header] props:",props);
	}
	handleClick(e) {
		e.preventDefault();
		const { isAuthenticated, "auth-url": AUTH_URL, logout } = this.props;
		if(isAuthenticated == "") {
			document.location.href = AUTH_URL;
		}
		else {
			logout();
		}
	}
	render() {
		const { isAuthenticated } = this.props;
		const buttonLabel = isAuthenticated ? "Logout" : "Authenticate";
		return(
			<header>
				<section>
					<span className="home">
						<Link to="/home">Home</Link>
					</span>
					<button onClick={this.handleClick.bind(this)}>{buttonLabel}</button> 
					<span className="search">
						<Link to="/search">Search</Link>
					</span>
				</section>
				<h1>Welcome to React Streaming Gamers</h1>
			</header>
		)
	}
}
export default Header;