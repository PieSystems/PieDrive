import * as actionTypes from './actionTypes';

export const navFolders = () => ({
    type: actionTypes.NAV_FOLDERS
});

export const loadRootSuccess = (files) => ({
    type: actionTypes.LOAD_ROOT_SUCCESS,
    files: files
});