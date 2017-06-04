import * as actionTypes from './actionTypes';

const initialState = {
    email: "",
    password: "",
    type: "NONE"
};

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SIGN_IN:
            return Object.assign({}, state, action);
        case actionTypes.SIGN_IN_SUCCESSS:
            return Object.assign({}, state, action, {password: ""});
        case actionTypes.SIGN_IN_FAILURE:
            return Object.assign({}, state, action);
        default:
            return state;
    }
}