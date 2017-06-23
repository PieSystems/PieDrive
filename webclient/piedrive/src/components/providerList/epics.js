import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import {push} from 'react-router-redux';

import * as loginSelectors from '../../pages/Login/selectors';

const addProviderEpic = (action$, store) => action$.ofType(actionTypes.ADD_PROVIDER)
    .mergeMap(action => ajax
        .post("http://localhost:8080/api/connect/2/" + action.provider, {}, {
            authorization: loginSelectors.getTokenType(store.getState()) + " " + loginSelectors.getAccessToken(store.getState())
        })
        .map(response => {console.log(response); window.open(response.response.url, "_self");})
        .catch(error => {console.log(error); return Observable.of(actions.addProviderFailed(error));})
    );

// const signInSuccessEpic = action$ => action$.ofType(actionTypes.SIGN_IN_SUCCESSS)
//     .map(action => push("/folders"));

const epics = [addProviderEpic];
export default epics;