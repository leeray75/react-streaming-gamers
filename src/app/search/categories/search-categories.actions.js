export const submit = (query) => ({
	type: 'SEARCH:CATEGORIES:SUBMIT',
	query
})

export const updateCategories = (categories) => ({
	type: 'SEARCH:CATEGORIES:UPDATE',
	categories
})

