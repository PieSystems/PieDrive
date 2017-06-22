import * as actionTypes from './actionTypes';

const initialState = {
    files: {
        root: []
    }
};

export default (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case actionTypes.LOAD_ROOT_SUCCESS:
            return Object.assign({}, state, {
                files: {
                    root: action.files
                }
            });
        default:
            return state;
    }
}