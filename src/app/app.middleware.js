import * as ActionTypes from './action-types.constants';
import { AUTH_STORAGE_KEY } from './constants';
import TwitchApi from '@leeray75/react-streaming-gamers/apis/twitch/twitch.api';
import * as UsersFollowsActionTypes from '@leeray75/react-streaming-gamers/users/follows/action-types.constants';
import * as SearchChannelsActionTypes from '@leeray75/react-streaming-gamers/search/channels/action-types.constants';
import * as WindowEventsActionTypes from '@leeray75/react-streaming-gamers/window-events/action-types.constants';
import * as PlayerActionTypes from '@leeray75/react-streaming-gamers/twitch-player/action-types.constants';
import * as PlayerActions from '@leeray75/react-streaming-gamers/twitch-player/player.actions';

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

const AppMiddleware = storeAPI => {

    function updatePlayerStream(playerStream, streams) {
        console.log('[AppMiddleware] in updatePlayerStream:', playerStream, " : ", streams);

        if (playerStream != null) {
            //console.log("[AppMiddleware] streams length:",streams.length, " : player id:",playerStream.id);
            const update_stream = streams.find(stream => {
                return stream.id == playerStream.id;
            })
            //console.log("[AppMiddleware] updatePlayerStream:", update_stream);
            storeAPI.dispatch(PlayerActions.updateStream(update_stream));
        }
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
        } else if (nextState.Player.player != null) {
            if (action.type == UsersFollowsActionTypes.UPDATE_STREAMS) {
                updatePlayerStream(nextState.Player.stream, nextState.UsersFollows.streams);
            } else if (action.type == SearchChannelsActionTypes.UPDATE_STREAMS) {
                updatePlayerStream(nextState.Player.stream, nextState.SearchChannels.streams);
            }
        }


        return result
    }
}
export default AppMiddleware;