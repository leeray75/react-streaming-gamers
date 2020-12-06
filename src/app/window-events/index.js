import { connect } from 'react-redux';
import WindowEventsComponent from './window-events.component';

import * as WindowActions from './window-events.actions';

const mapStateToProps = (state, ownProps) => {
    const props = Object.assign({}, ownProps)

    return props;
};

const mapDispatchToProps = dispatch => {
    return {
    	onBlur(e) {
    		dispatch(WindowActions.onBlur(e));
    	},
    	onFocus(e) {
    		dispatch(WindowActions.onFocus(e));
    	}
    }
};

const WindowEvents= connect(mapStateToProps,mapDispatchToProps)(WindowEventsComponent);
export default WindowEvents;