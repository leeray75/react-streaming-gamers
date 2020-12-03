
function getDefaultState() {
    const DEFAULT_STATE = {
        channel: null,
        video: "",
        collection: "",
        player: null,
        stream: null
    }
    return DEFAULT_STATE;
}



let PREV_STATE = {};
const Player = (state = {}, action) => {
    let newState = {};
    
    const { type } = action;

    switch (type) {
        case 'PLAYER:CREATE':
            const { player } = action;

            newState = { 
                player
            }
            break;
        case 'PLAYER:LOAD:CHANNEL':
            const { channel, stream } = action;
            newState = {
                channel,
                stream
            }
            break;
        case 'PLAYER:DESTROY':
            newState = getDefaultState();
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

export default Player;

