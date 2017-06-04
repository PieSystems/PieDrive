import {connect} from 'react-redux'

import LoginComponent from '../components/Login';
import * as actions from '../actions';

import * as selectors from '../selectors';

const mapStateToProps = (state) => ({
        email: selectors.getEmail(state),
        password: selectors.getPassword(state),
        type: selectors.getType(state)
    });

const mapDispatchToProps = (dispatch) => ({
    onSignInClick: (user, password) => dispatch(actions.signIn(user, password))
});

const LoginPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

export default LoginPage;