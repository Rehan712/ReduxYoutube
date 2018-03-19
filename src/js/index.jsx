import ReactDOM from 'react-dom';
import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger'
import reduxPromise from 'redux-promise'


import App from './components/App';
import rootReducers from './reducers';

const store=createStore(
	rootReducers,
	applyMiddleware(reduxThunk,logger)
	)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#app')
);