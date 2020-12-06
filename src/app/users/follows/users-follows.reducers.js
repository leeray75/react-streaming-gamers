import * as FollowsActions from './action-types.constants';
import * as WindowEventsActionTypes from '@leeray75/react-streaming-gamers/window-events/action-types.constants';
import * as PlayerActionTypes from '@leeray75/react-streaming-gamers/twitch-player/action-types.constants';

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
        case FollowsActions.UPDATE_FOLLOWS:
            const { follows } = action;

            newState = { 
                follows
            }
            break;
        case FollowsActions.UPDATE_USERS:
            const { users } = action;
            newState = {
                users
            }
            break;
        case FollowsActions.UPDATE_STREAMS:
            const { streams } = action;
            newState = {
                streams
            }
            break;
        // Reload Followers
        case WindowEventsActionTypes.FOCUS:
        case PlayerActionTypes.DESTROY:
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

