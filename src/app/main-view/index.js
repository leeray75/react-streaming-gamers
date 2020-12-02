import { connect } from 'react-redux';
import Main from './main.component';
import * as AppActions from '@leeray75/react-streaming-gamers/app.actions';
const mapStateToProps = (state, ownProps) => {
    const props = Object.assign({
    	follows: state.UsersFollows.follows
    }, ownProps, state.App)

    return props;
};

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (user) =>{
            dispatch(AppActions.user(user))
        }
    }
};

const MainView = connect(mapStateToProps,mapDispatchToProps)(Main);

export default MainView;