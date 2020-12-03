
export const updateFollows = (follows=[]) => ({
	type: 'USERS:FOLLOWS:UPDATE',
	follows
})

export const updateUsers = (users=[]) => ({
	type: 'USERS:FOLLOWS:USERS',
	users
})

export const updateStreams = (streams=[]) => ({
	type: 'USERS:FOLLOWS:STREAMS',
	streams
})

