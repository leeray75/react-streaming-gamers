import _merge from 'lodash.merge';
import { connect } from 'react-redux';
import UsersFollows from './users-follows.component';
import * as StreamsActions from '@leeray75/react-streaming-gamers/streams/streams.actions';
import * as UsersFollowsActions from './users-follows.actions';


const mapStateToProps = (state, ownProps) => {
    const props = _merge({
        user_id: state.App.user != null ? state.App.user.id : null,
        streams: state.Streams
    }, ownProps, state.UsersFollows)

    return props;
};
const mapDispatchToProps = dispatch => {
    return {
        updateFollows: (follows) =>{
            dispatch(UsersFollowsActions.updateFollows(follows))
        },
        updateStreams: (streams) => {
            dispatch(StreamsActions.update(streams))
        }
    }
};

const UsersFollowsModule = connect(mapStateToProps, mapDispatchToProps)(UsersFollows);
export default UsersFollowsModule;