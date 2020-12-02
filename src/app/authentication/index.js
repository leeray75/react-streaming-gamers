import { connect } from 'react-redux';
import Authentication from './authentication.component';
import * as AppActions from '@leeray75/react-streaming-gamers/app.actions';


const mapStateToProps = (state, ownProps) => {
    //console.log("[MediaPlayer] mapStateToProps:",state);
    const props = Object.assign({}, ownProps, state.App)

    return props;
};
const mapDispatchToProps = dispatch => {
    return {
    }
};

const AuthenticationScreen = connect(mapStateToProps, mapDispatchToProps)(Authentication);
export default AuthenticationScreen;