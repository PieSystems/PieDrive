import {connect} from 'react-redux'

import ProvidersPage from '../components/ProvidersPage';
import * as actions from '../actions';

//import * as selectors from '../selectors';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    onProviderAdded: (provider) => dispatch(actions.addedProvider(provider))
});

const ProvidersPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProvidersPage);

export default ProvidersPageContainer;