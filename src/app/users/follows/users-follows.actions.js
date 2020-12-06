import * as FollowsActions from './action-types.constants';

export const updateFollows = (follows=[]) => ({
	type: FollowsActions.UPDATE_FOLLOWS,
	follows
})

export const updateUsers = (users=[]) => ({
	type: FollowsActions.UPDATE_USERS,
	users
})

export const updateStreams = (streams=[]) => ({
	type: FollowsActions.UPDATE_STREAMS,
	streams
})

