import _merge from 'lodash.merge';
import { connect } from 'react-redux';
import SearchCategories from './search-categories.component';

import * as SearchCategoriesActions from './search-categories.actions';


const mapStateToProps = (state, ownProps) => {

    const props = _merge({}, ownProps,state.SearchCategories)

    return props;
};
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (query="") => {
            dispatch(SearchCategoriesActions.submit(query))
        },
        updateCategories(categories=[]) {
        	dispatch(SearchCategoriesActions.updateCategories(categories));
        }
    }
};

const SearchCategoriesModule = connect(mapStateToProps, mapDispatchToProps)(SearchCategories);
export default SearchCategoriesModule;