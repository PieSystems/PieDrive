import React, { Component } from 'react';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';

import {persistStore, autoRehydrate} from 'redux-persist'

import {Framework7App, View, Views, Pages } from 'framework7-react';

import Explorer from './pages/Explorer';
import Home from './pages/Home';
import LeftPanel from './components/leftPanel/components/LeftPanel';
import LeftPanelContainer from './components/leftPanel/containers/LeftPanelContainer';
import ProvidersPage from './pages/Providers/components/ProvidersPage';

import loginModule from './pages/Login';
import providerListModule from './components/providerList';
import leftPanelModule from './components/leftPanel';

import PieFile from './model/PieFile';

const history = createBrowserHistory();
//const history = createHashHistory();
const middleware = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware(
    combineEpics(
        ...loginModule.epics,
        ...providerListModule.epics,
        ...leftPanelModule.epics
    )
);

const initialState = {
  files: {
    root: [new PieFile("uni", true, ["dropbox", "google"]), new PieFile("repos", true, ["github", "bitbucket"]), new PieFile("Thesis.pdf", false, ["google"]), new PieFile("hddBackup", false, ["dropbox", "lock"])],
    uni: [new PieFile("ase", true, ["dropbox"]), new PieFile("FMI", true, ["dropbox"])],
    ase: [new PieFile("lecture", false, ["dropbox"]), new PieFile("exam", false, ["dropbox"])]
  }
}

function initApp(state = initialState, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  console.log(state);
  return state
}

export const store = createStore(
    combineReducers({
      initApp: leftPanelModule.reducer,
      login: loginModule.reducer,
      providerList: providerListModule.reducer,
      router: routerReducer
	}),
    compose(
        applyMiddleware(middleware, epicMiddleware),
        autoRehydrate()
    )
);

persistStore(store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ConnectedRouter history={history}>
      <Framework7App themeType="material">
        <LeftPanelContainer />
        <Views>
          <View id="main-view" navbarThrough dynamicNavbar={true} main url="/home">
            <Pages>
            <Route exact path="/" component={Home}/>
            <Route exact path="/folders" component={Explorer}/>
            <Route path="/folders/:folderId" component={Explorer}/>
            <Route path="/providers" component={ProvidersPage}/>
            </Pages>
          </View>
        </Views>
      </Framework7App>
      </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
