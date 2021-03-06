import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppMiddleware from './app.middleware';
import AppReducers from './app.reducers';
import WindowEvents from './window-events';
import { HomePage, LoginPage } from './pages';
import Header from './common/header';
import TwitchPlayer from './twitch-player';
import { AUTH_URL, AUTH_STORAGE_KEY } from './constants';
import AppRouter from './router';

export default class App extends Component {
    constructor(props) {
        super(props);
        console.log("[App] props:", props);
        const middlewareEnhancer = applyMiddleware(AppMiddleware);
        this.store = createStore(AppReducers, {
            App: props
        },middlewareEnhancer);
        window.store = this.store;
        require('./react-streaming-gamers');
    }


    render() {
        return (
            <Provider store={this.store}>
                <WindowEvents window={window}>
                    <div className="react-streaming-gamers">
                        <AppRouter auth-url={AUTH_URL}  />
                    </div>
                    <TwitchPlayer />
                </WindowEvents>
            </Provider>
        )
    }
}