
function getDefaultState() {
    const DEFAULT_STATE = {
        "follows": []
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

