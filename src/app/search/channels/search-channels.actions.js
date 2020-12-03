export const submit = (query,live) => ({
	type: 'SEARCH:CHANNELS:SUBMIT',
	query,
	live
})

export const updateChannels = (channels) => ({
	type: 'SEARCH:CHANNELS:UPDATE',
	channels
})


export const updateUsers = (users=[]) => ({
	type: 'SEARCH:CHANNELS:USERS',
	users
})

export const updateStreams = (streams=[]) => ({
	type: 'SEARCH:CHANNELS:STREAMS',
	streams
})

