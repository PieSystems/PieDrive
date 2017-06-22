import {connect} from 'react-redux'

import LeftPanel from '../components/LeftPanel';
import * as actions from '../actions';


const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    onNavFolders: () => dispatch(actions.navFolders())
});

const LeftPanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPanel);

export default LeftPanelContainer;