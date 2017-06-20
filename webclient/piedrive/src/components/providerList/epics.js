import * as actionTypes from './actionTypes';
import * as actions from './actions';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import {push} from 'react-router-redux';

import * as loginSelectors from '../../pages/Login/selectors';

const addProviderEpic = (action$, store) => action$.ofType(actionTypes.ADD_PROVIDER)
  // Could be done better using the *FormData API*
  // @see https://developer.mozilla.org/de/docs/Web/API/FormData
  .mergeMap(action => {
    const form = document.createElement('form');
    document.body.appendChild(form);

    const auth = document.createElement('input');
    auth.name = 'authorization';
    auth.value = `${loginSelectors.getTokenType(store.getState())} ${loginSelectors.getAccessToken(store.getState())}`;

    form.appendChild(auth);

    form.action = `http://localhost:8080/api/connect/${action.provider}`;
    form.target = '_self';
    form.submit();
  });

// const signInUserEpic = action$ => action$.ofType(actionTypes.SIGN_IN)
//     .mergeMap(action => ajax
//         .post("http://localhost:8080/uaa/oauth/token", {
//             username: action.email,
//             password: action.password,
//             grant_type: "password",
//             scope: "piedrive",
//             client_id: "piedrive"
//         })
//         .map(response => actions.signInSuccess(response.response))
//         .catch(error => Observable.of(actions.signInFail(error)))
//     );

// const signInSuccessEpic = action$ => action$.ofType(actionTypes.SIGN_IN_SUCCESSS)
//     .map(action => push("/folders"));

const epics = [addProviderEpic];
export default epics;