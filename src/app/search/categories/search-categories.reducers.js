
function getDefaultState() {
    const DEFAULT_STATE = {
        "query": "",
        "categories": []
    }
    return DEFAULT_STATE;
}
let PREV_STATE = {};
const SearchCategories= (state = {}, action) => {
    let newState = {};
    
    const { type } = action;

    switch (type) {
        case 'SEARCH:CATEGORIES:SUBMIT':
            const { query } = action;
            newState = {
                query
            }
            break;
        case 'SEARCH:CATEGORIES:UPDATE':
            const { categories } = action;

            newState = { 
                categories
            }
            break;
        default:
            newState = state;
    }
    if (newState !== PREV_STATE) {
        newState = Object.assign(getDefaultState(),PREV_STATE,newState);
    }
    //console.log("[MediaPlayer Reducers] newState",newState);
    PREV_STATE = newState;
    return newState;
}

export default SearchCategories;

