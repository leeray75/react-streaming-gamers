import { connect } from 'react-redux';
import Home from './home.page';
import LoginPage from './login.page';
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

export const HomePage = connect(mapStateToProps,mapDispatchToProps)(Home);
export { LoginPage } 

