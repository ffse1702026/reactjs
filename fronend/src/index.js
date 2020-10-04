import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './_reducers';

import registerServiceWorker from './registerServiceWorker';
import { createLogger } from 'redux-logger';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
// Apply the middleware to the store
const middleware = routerMiddleware(history)

const logger = createLogger()


/**
 * Logs all actions and states after they are dispatched.
 */
const getList = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    if(action.type === 'FETECHED_ALL_VENDOR') {
        action.headers = { 'x-access-token': localStorage.getItem('token') };
    }
    return result
  }

const store = createStore(reducer, applyMiddleware(thunk, getList, middleware))
ReactDOM.render(
    <Provider store={store} history={history}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
