import * as ActionTypes from './action-types.constants';
import { AUTH_STORAGE_KEY } from './constants';
import TwitchApi from '@leeray75/react-streaming-gamers/apis/twitch/twitch.api';

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
    }
    else {
    	return Promise.reject("[AppMiddleware] LOGOUT: MISSING access_token");
    }
}
const AppMiddleware = storeAPI => next => action => {
    // Do something in here, when each action is dispatched
    const state = storeAPI.getState();
    console.log('[AppMiddleware] current state', state)
    console.log('[AppMiddleware] dispatching', action)
    let result = next(action)
    const nextState = storeAPI.getState();
    if (state.App.isAuthenticated === true && nextState.App.isAuthenticated === false) {
        logout(state.App)
    }
    console.log('[AppMiddleware] next state', storeAPI.getState())

    return result
}
export default AppMiddleware;