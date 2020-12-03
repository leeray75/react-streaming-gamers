import _merge from 'lodash.merge';
import { connect } from 'react-redux';
import Player from './player.component';
import * as PlayerActions from './player.actions';


const mapStateToProps = (state, ownProps) => {
    const props = _merge({}, ownProps, state.Player)

    return props;
};
const mapDispatchToProps = dispatch => {
    return {
        createPlayer: (player) =>{
            dispatch(PlayerActions.createPlayer(player))
        },
        destroyPlayer: () => {
            dispatch(PlayerActions.destroyPlayer())
        }
    }
};

const PlayerModule = connect(mapStateToProps, mapDispatchToProps)(Player);
export default PlayerModule;