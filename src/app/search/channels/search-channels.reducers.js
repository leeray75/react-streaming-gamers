import * as ActionTypes from './action-types.constants';
function getDefaultState() {
    const DEFAULT_STATE = {

        "channels": [],
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

        case ActionTypes.UPDATE:
            const { channels } = action;
            const sortedChannels = channels.sort( (a,b) => {
                return b.is_live === true ? 1 : -1;
            })
            newState = { 
                channels: sortedChannels,
                users: [],
                streams: []
            }
            break;
        case ActionTypes.USERS:
            const { users } = action;
            newState = {
                users
            }
            break;
        case ActionTypes.STREAMS:
            const { streams } = action;
            newState = {
                streams
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

