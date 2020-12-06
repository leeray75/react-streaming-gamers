import * as ActionTypes from './action-types.constants';
export const onFocus = (event) => ({
	type: ActionTypes.FOCUS,
	event
})
export const onBlur = (event) => ({
	type: ActionTypes.BLUR,
	event
})