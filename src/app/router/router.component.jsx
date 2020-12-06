import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";

import { HomePage, LoginPage, SearchPage } from '@leeray75/react-streaming-gamers/pages';
import Header from '@leeray75/react-streaming-gamers/common/header';


export default class AppRouter extends Component {
    constructor(props) {
        super(props);
        console.log("[Router] props:", props);
    }

    render() {
        const { isAuthenticated, "auth-url": AUTH_URL, } = this.props;

        return (
            <Router basename="/">
                <Header auth-url={AUTH_URL} />
                <Switch>
                    <Route path="/login">
                        {isAuthenticated ? <Redirect to="/home" /> : <LoginPage auth-url={AUTH_URL} />}
                    </Route>
                    <Route path="/search">
                        {isAuthenticated ? <SearchPage /> : <Redirect to="/login" />}
                    </Route>
                    <Route path="/home">
                        {isAuthenticated ? <HomePage /> : <Redirect to="/login" />}
                    </Route>
                    <Route>
                        {isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />}
                    </Route>
                </Switch>

            </Router>
        )
    }
}