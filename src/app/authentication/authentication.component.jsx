import React, { Component } from 'react';
import { AUTH_URL } from '@leeray75/react-streaming-gamers/constants';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        console.log("[Authentication] props:", props);

    }
    render() {
        return (
            <a href={AUTH_URL}>Authenticate Twitch Account</a>
        )
    }
}