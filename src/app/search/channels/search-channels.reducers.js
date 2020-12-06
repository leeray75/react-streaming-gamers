import * as ActionTypes from './action-types.constants';
import * as WindowEventsActionTypes from '@leeray75/react-streaming-gamers/window-events/action-types.constants';
import * as PlayerActionTypes from '@leeray75/react-streaming-gamers/twitch-player/action-types.constants';

function getDefaultState() {
    const DEFAULT_STATE = {
        "query": "",
        "live": false,
        "channels": null,
        "users": [],
        "streams": []
    }
    return DEFAULT_STATE;
}
let PREV_STATE = {};
const SearchChannels = (state = {}, action) => {
    let newState = {};
    
    const { type } = action;

    switch (type) {

        case ActionTypes.UPDATE_CHANNELS:
            const { query, channels, live } = action;
            const sortedChannels = channels.sort( (a,b) => {
                return b.is_live === true ? 1 : -1;
            })
            newState = { 
                query,
                live,
                channels: sortedChannels,
            }
            break;
        case ActionTypes.UPDATE_USERS:
            const { users } = action;
            newState = {
                users
            }
            break;
        case ActionTypes.UPDATE_STREAMS:
            const { streams } = action;
            newState = {
                streams
            }
            break;
        // Reload Followers
        case WindowEventsActionTypes.FOCUS:
        case PlayerActionTypes.DESTROY:
            newState = {
                query: "",
                channels: null
            }
            break;
        default:
            newState = state;
    }
    if (newState !== PREV_STATE) {
        newState = Object.assign(getDefaultState(),PREV_STATE,newState);
    }
    //console.log("[MediaPlayer Reducers] newState",newState);
    PREV_STATE = newState;
    return newState;
}

export default SearchChannels;

