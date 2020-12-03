
export const createPlayer = (player = null) => ({
	type: 'PLAYER:CREATE',
	player
})

export const destroyPlayer = () => ({
	type: 'PLAYER:DESTROY'
})
export const loadChannel = (channel = null, stream = null) => ({
	type: 'PLAYER:LOAD:CHANNEL',
	channel, 
	stream
})



