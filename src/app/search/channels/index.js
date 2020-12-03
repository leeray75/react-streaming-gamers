import _merge from 'lodash.merge';
import { connect } from 'react-redux';
import SearchChannels from './search-channels.component';

import * as SearchChannelActions from './search-channels.actions';


const mapStateToProps = (state, ownProps) => {

    const props = _merge({}, ownProps,state.SearchChannels)

    return props;
};
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (query="",live=false) => {
 
            dispatch(SearchChannelActions.submit(query,live))
        },
        updateChannels(channels=[]) {
        	dispatch(SearchChannelActions.updateChannels(channels));
        },
        updateStreams: (streams) => {
            dispatch(SearchChannelActions.updateStreams(streams))
        },
        updateUsers: (users) => {
            dispatch(SearchChannelActions.updateUsers(users))
        }
    }
};

const SearchChannelsModule = connect(mapStateToProps, mapDispatchToProps)(SearchChannels);
export default SearchChannelsModule;