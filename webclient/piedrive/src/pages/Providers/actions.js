import * as actionTypes from './actionTypes';

export const addedProvider = (provider) => ({
    type: actionTypes.ADDED_PROVIDER,
    provider: provider
});