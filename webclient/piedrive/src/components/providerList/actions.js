import * as actionTypes from './actionTypes';

export const addProvider = (provider) => ({
    type: actionTypes.ADD_PROVIDER,
    provider: provider
});

export const addProviderFailed = (error) => ({
    type: actionTypes.ADD_PROVIDER_FAILED,
    error: error
});