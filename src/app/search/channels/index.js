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
        updateChannels(channels=[], query="", live=false) {
        	dispatch(SearchChannelActions.updateChannels(channels,query,live));
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