import {connect} from 'react-redux'

import ProviderList from '../components/ProviderList';
import * as actions from '../actions';

//import * as selectors from '../selectors';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    onProviderAdd: (provider) => dispatch(actions.addProvider(provider))
});
console.log("FU");

const ProviderListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProviderList);

export default ProviderListContainer;