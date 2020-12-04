import ReactDOM from 'react-dom';
import React from 'react';
import { AUTH_STORAGE_KEY } from './constants';
import App from './app';

let appEl = document.getElementById('app');
const { hash } = document.location;

let props = {};
if(hash.startsWith('#access_token=')) {
	const { localStorage } = window;
	const hashItems = (hash.replace("#access_token=","access_token=")).split("&");
	props.isAuthenticated = true;
	hashItems.forEach( item => {
		const propSettings = item.split("=");
		const key = propSettings[0];
		const value = propSettings[1];
		props[key] = value;
	})
	localStorage.setItem(AUTH_STORAGE_KEY,JSON.stringify(props));
}
else if(localStorage.getItem(AUTH_STORAGE_KEY) != null) {

	props = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
	console.log("[React Streaming Gamers] Local Storage Auth:",props);
}

ReactDOM.render(React.createElement(App,props), appEl);