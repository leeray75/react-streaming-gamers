import _merge from 'lodash.merge';

function getDefaultState() {
    const DEFAULT_STATE = {
        "access_token": null,
        "scope": null,
        "token_type": null,
        "client_id": null,
        "user": null
    }
    return DEFAULT_STATE;
}
let PREV_STATE = {};
const APP = (state = {}, action) => {
    let newState = {};
    
    const { type, data } = action;

    switch (type) {
        case 'APP:USER':
            newState = {
                user: data
            }
            break;
        case 'APP:AUTHENTICATE':
            newState = { ...data }
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

export default APP;

