import _merge from 'lodash.merge';

import TwitchPlayer from '@leeray75/react-streaming-gamers/twitch-player';
import SearchChannelsReducers from './search/channels/search-channels.reducers';
import SearchCategoriesReducers from './search/categories/search-categories.reducers';
import UsersFollowsReducers from './users/follows/users-follows.reducers';
import PlayerReducers from './twitch-player/player.reducers';
import { combineReducers } from 'redux';
import * as ActionTypes from './action-types.constants';
import { CLIENT_ID } from './constants';

function getDefaultState() {
    const DEFAULT_STATE = {
        "access_token": null,
        "scope": null,
        "token_type": null,
        "client_id": CLIENT_ID,
        "isAuthenticated": false,
        "user": null
    }
    return DEFAULT_STATE;
}
let PREV_STATE = {};
const App = (state = {}, action) => {
    let newState = {};
    
    const { type, data } = action;

    switch (type) {
        case ActionTypes.USER:
            newState = {
                user: data
            }
            break;
        case ActionTypes.AUTHENTICATE:
            newState = data.access_token == null || data.access_token == "" ? { ...data, isAuthenticated: false } : { ...data, isAuthenticated: true }
            break;
        case ActionTypes.LOGOUT:
            newState = getDefaultState();
            break;
        default:
            newState = state;
    }
    if (newState !== PREV_STATE) {
        newState = _merge(getDefaultState(),PREV_STATE,newState);
    }
    //console.log("[MediaPlayer Reducers] newState",newState);
    PREV_STATE = newState;
    return newState;
}

const AppReducers = combineReducers({
    App,
    SearchChannels: SearchChannelsReducers,
    SearchCategories: SearchCategoriesReducers,
    UsersFollows: UsersFollowsReducers,
    Player: PlayerReducers
});
export default AppReducers;

