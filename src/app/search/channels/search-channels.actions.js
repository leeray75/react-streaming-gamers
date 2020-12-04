import * as ActionTypes from './action-types.constants';
export const updateChannels = (channels) => ({
	type: ActionTypes.UPDATE,
	channels
})


export const updateUsers = (users=[]) => ({
	type: ActionTypes.USERS,
	users
})

export const updateStreams = (streams=[]) => ({
	type: ActionTypes.STREAMS,
	streams
})

