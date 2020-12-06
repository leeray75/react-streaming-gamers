import * as ActionTypes from './action-types.constants';
export const updateChannels = (channels,query,live) => ({
	type: ActionTypes.UPDATE_CHANNELS,
	query,
	live,
	channels
})


export const updateUsers = (users=[]) => ({
	type: ActionTypes.UPDATE_USERS,
	users
})

export const updateStreams = (streams=[]) => ({
	type: ActionTypes.UPDATE_STREAMS,
	streams
})

