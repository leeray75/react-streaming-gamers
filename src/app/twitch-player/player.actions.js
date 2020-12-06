import * as ActionTypes from './action-types.constants';
export const createPlayer = (player = null) => ({
	type: ActionTypes.CREATE,
	player
})

export const destroyPlayer = () => ({
	type: ActionTypes.DESTROY
})
export const loadChannel = (channel = null, stream = null) => ({
	type: ActionTypes.LOAD_CHANNEL,
	channel, 
	stream
})

export const updateStream = ( stream = null ) => ({
	type: ActionTypes.UPDATE_STREAM,
	stream
})

