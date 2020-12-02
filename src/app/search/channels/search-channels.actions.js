export const submit = (query,live) => ({
	type: 'SEARCH:CHANNELS:SUBMIT',
	query,
	live
})

export const updateChannels = (channels) => ({
	type: 'SEARCH:CHANNELS:UPDATE',
	channels
})

