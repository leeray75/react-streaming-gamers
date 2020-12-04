import * as ActionTypes from './action-types.constants';
function getDefaultState() {
    const DEFAULT_STATE = {
        "categories": []
    }
    return DEFAULT_STATE;
}

const SearchCategories= (state = {}, action) => {
    let newState = {};
    
    const { type } = action;

    switch (type) {
        case ActionTypes.UPDATE:
            const { categories } = action;

            newState = { 
                categories
            }
            break;
        default:
            newState = state;
    }
    if (newState !== state) {
        newState = Object.assign(getDefaultState(),state,newState);
    }
    //console.log("[MediaPlayer Reducers] newState",newState);

    return newState;
}

export default SearchCategories;

