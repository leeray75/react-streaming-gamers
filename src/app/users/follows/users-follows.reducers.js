
function getDefaultState() {
    const DEFAULT_STATE = {
        "follows": null,
        "users": [],
        "streams": []
    }
    return DEFAULT_STATE;
}
let PREV_STATE = {};
const UsersFollows = (state = {}, action) => {
    let newState = {};
    
    const { type } = action;

    switch (type) {
        case 'USERS:FOLLOWS:UPDATE':
            const { follows } = action;

            newState = { 
                follows
            }
            break;
        case 'USERS:FOLLOWS:USERS':
            const { users } = action;
            newState = {
                users
            }
            break;
        case 'USERS:FOLLOWS:STREAMS':
            const { streams } = action;
            newState = {
                streams
            }
            break;
        case 'PLAYER:DESTROY':
            newState = {
                follows: null
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

export default UsersFollows;

