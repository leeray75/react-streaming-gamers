import * as ActionTypes from './action-types.constants';
export const authenticate = (data) => ({
	type: ActionTypes.AUTHENTICATE,
	data
})

export const user = (data) => ({
	type: ActionTypes.USER,
	data
})


export const logout = () => ({
	type: ActionTypes.LOGOUT
})
