import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import {push} from 'react-router-redux';

import * as loginSelectors from '../../pages/Login/selectors';

const loadFilesEpic = (action$, store) => action$.ofType(actionTypes.NAV_FOLDERS)
    .mergeMap(action => ajax
        .post("http://localhost:8080/api/listAll", {}, {
            authorization: loginSelectors.getTokenType(store.getState()) + " " + loginSelectors.getAccessToken(store.getState())
        })
        .map(response => actions.loadRootSuccess(response.response))
        .catch(error => Observable.of(actions.signInFail(error)))
    );

const navigateEpic = action$ => action$.ofType(actionTypes.LOAD_ROOT_SUCCESS)
    .map(action => push("/folders"));

const epics = [navigateEpic, loadFilesEpic];
export default epics;