import React, { Component } from 'react';
import _merge from 'lodash.merge';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Header from './common/header';
import MainView from './main-view';
import AppReducers from './app.reducers';
import SearchChannelsReducers from './search/channels/search-channels.reducers';
import SearchCategoriesReducers from './search/categories/search-categories.reducers';
import UsersFollowsReducers from './users/follows/users-follows.reducers';
import StreamsReducers from './streams/streams.reducers';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        console.log("[Welcome] props:", props);
        const reducers = combineReducers({
            App: AppReducers,
            SearchChannels: SearchChannelsReducers,
            SearchCategories: SearchCategoriesReducers,
            UsersFollows: UsersFollowsReducers,
            Streams: StreamsReducers
        });
        this.store = createStore(reducers, {
            App: _merge({}, props)
        });
        window.store = this.store;

    }

    render() {
        return (
            <div className="react-streaming-gamers">
                <Provider store={this.store}>
                    <Header />
                    <MainView />
                </Provider>
            </div>
        )
    }
}