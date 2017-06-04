import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import {Framework7App, View, Views, Pages } from 'framework7-react';

import Explorer from './pages/Explorer';
import LeftPanel from './components/LeftPanel';
import ProvidersPage from './pages/ProvidersPage';

import PieFile from './model/PieFile';

const history = createBrowserHistory();
//const history = createHashHistory();
const middleware = routerMiddleware(history);

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
      initApp,
      router: routerReducer
	}),
  applyMiddleware(middleware)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <ConnectedRouter history={history}>
      <Framework7App themeType="material">
        <LeftPanel />
        <Views>
          <View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
            <Pages>
            <Route exact path="/" component={Explorer}/>
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
