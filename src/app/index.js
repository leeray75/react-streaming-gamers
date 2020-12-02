import ReactDOM from 'react-dom';
import React from 'react';
import { CLIENT_ID, AUTH_URL } from './constants';
import Welcome from './welcome';
let appEl = document.getElementById('app');
const { hash } = document.location;
let props = {
	client_id: CLIENT_ID,

};
if(hash.startsWith('#access_token=')) {
	const hashItems = (hash.replace("#access_token=","access_token=")).split("&");
	hashItems.forEach( item => {
		const propSettings = item.split("=");
		const key = propSettings[0];
		const value = propSettings[1];
		props[key] = value;
	})
}

ReactDOM.render(React.createElement(Welcome,props), appEl);