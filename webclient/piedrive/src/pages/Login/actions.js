import * as actionTypes from './actionTypes';

export const signIn = (email, password) => ({
    type: actionTypes.SIGN_IN,
    email: email,
    password: password
});

export const signInSuccess = (token) => ({
    type: actionTypes.SIGN_IN_SUCCESSS,
    token: token
});

export const signInFail = (error) => ({
    type: actionTypes.SIGN_IN_FAILURE,
    error: error
});