import { connect } from 'react-redux';
import ChannelItem from './channel-item.component';
import * as PlayerActions from '@leeray75/react-streaming-gamers/twitch-player/player.actions';

const mapStateToProps = (state, ownProps) => {
    return ownProps
};
const mapDispatchToProps = dispatch => {
    return {
        onClick: (channel,stream) =>{
            dispatch(PlayerActions.loadChannel(channel,stream))
        }
    }
};

const Module = connect(mapStateToProps, mapDispatchToProps)(ChannelItem);
export default Module;