import { connect } from 'react-redux';
import RouterComponent from './router.component';

import * as AppActions from '@leeray75/react-streaming-gamers/app.actions';
const mapStateToProps = (state, ownProps) => {
    const props = Object.assign({}, ownProps,state.App)

    return props;
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

const AppRouter = connect(mapStateToProps,mapDispatchToProps)(RouterComponent);
export default AppRouter


