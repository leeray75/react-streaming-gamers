
function getDefaultState() {
    const DEFAULT_STATE = {
        "query": "",
        "live": false,
        "channels": []
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
                channels: sortedChannels
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

