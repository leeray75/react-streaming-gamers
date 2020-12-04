import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import { HomePage, LoginPage } from '@leeray75/react-streaming-gamers/pages';
import Header from '@leeray75/react-streaming-gamers/common/header';


export default class AppRouter extends Component {
    constructor(props) {
        super(props);
        console.log("[Router] props:", props);
    }

    render() {
        const { isAuthenticated, "auth-url": AUTH_URL, "auth-storage-key": AUTH_STORAGE_KEY } = this.props;

        return (
            <Router>
                <Header auth-url={AUTH_URL} />
                <Switch>
                    <Route path="/login">
                        {isAuthenticated ? <Redirect to="/" /> : <LoginPage auth-url={AUTH_URL} auth-storage-key={AUTH_STORAGE_KEY} />}
                    </Route>
                    <Route path="/">
                        {isAuthenticated ? <HomePage /> : <Redirect to="/login" />}
                    </Route>
                </Switch>

            </Router>
        )
    }
}