
function getDefaultState() {
    const DEFAULT_STATE = {
        "query": "",
        "live": false,
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
        case 'SEARCH:CHANNELS:SUBMIT':
            const { query, live } = action;
            newState = {
                query,
                live
            }
            break;
        case 'SEARCH:CHANNELS:UPDATE':
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
        case 'SEARCH:CHANNELS:USERS':
            const { users } = action;
            newState = {
                users
            }
            break;
        case 'SEARCH:CHANNELS:STREAMS':
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

