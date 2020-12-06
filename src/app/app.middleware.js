import * as ActionTypes from './action-types.constants';
import { AUTH_STORAGE_KEY } from './constants';
import TwitchApi from '@leeray75/react-streaming-gamers/apis/twitch/twitch.api';
import * as UsersFollowsActionTypes from '@leeray75/react-streaming-gamers/users/follows/action-types.constants';
import * as WindowEventsActionTypes from '@leeray75/react-streaming-gamers/window-events/action-types.constants';
import * as PlayerActionTypes from '@leeray75/react-streaming-gamers/twitch-player/action-types.constants';
import * as PlayerActions from '@leeray75/react-streaming-gamers/twitch-player/player.actions';
const AppMiddleware = storeAPI => {
    function logout(app) {
        console.log("[AppMiddleware] LOGOUT");
        const { client_id, access_token: token } = app;
        if (token != null) {
            const api = new TwitchApi(client_id, token);
            return api.logout().then(response => {
                window.localStorage.removeItem(AUTH_STORAGE_KEY);
                console.log("[AppMiddleware] LOGOUT:SUCESS")
            }).catch(error => {
                console.error("[AppMiddleware] LOGOUT:FAILED", error)
            });
        } else {
            return Promise.reject("[AppMiddleware] LOGOUT: MISSING access_token");
        }
    }

    function updatePlayerStream(channel, streams) {
        console.log('[AppMiddleware] in updatePlayerStream:', channel, " : ", streams);;
        const stream = streams.find(stream => {
            stream.user_name == channel;
        })
        console.log("[AppMiddleware] updatePlayerStream:", stream);
        storeAPI.dispatch(PlayerActions.updateStream(stream));
    }
    return next => action => {
        // Do something in here, when each action is dispatched
        const state = storeAPI.getState();
        console.log('[AppMiddleware] current state', state)
        console.log('[AppMiddleware] dispatching', action)
        let result = next(action)
        const nextState = storeAPI.getState();
        console.log('[AppMiddleware] next state', nextState);
        if (state.App.isAuthenticated === true && nextState.App.isAuthenticated === false) {
            logout(state.App)
        } else if (nextState.Player.player != null && action.type == UsersFollowsActionTypes.UPDATE_STREAMS) {
            updatePlayerStream(nextState.Player.channel, nextState.UsersFollows.streams);
        }


        return result
    }
}
export default AppMiddleware;