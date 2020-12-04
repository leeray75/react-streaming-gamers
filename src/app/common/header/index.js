import { connect } from 'react-redux';
import HeaderComponent from './header.component';
import * as AppActions from '@leeray75/react-streaming-gamers/app.actions';
const mapStateToProps = (state, ownProps) => {
    const props = Object.assign({}, ownProps, state.App)

    return props;
};

const mapDispatchToProps = dispatch => {
    return {
        logout: (user) =>{
            dispatch(AppActions.logout())
        }
    }
};

const Header = connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);
export default Header;


