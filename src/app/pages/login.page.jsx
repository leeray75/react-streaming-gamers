import React, { Component } from 'react';


export default class Login extends Component {
    constructor(props) {
        super(props);
        console.log("[Login Page] props:", props);
        

    }
    render() {
        return (
        	<main>
        	<h1>Authenticate Twitch Account</h1>
            <a href={this.props.["auth-url"]}>Continue</a>
            </main>
        )
    }
}