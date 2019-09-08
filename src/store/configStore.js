import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './reducers'

export const history = createBrowserHistory()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
    const store = createStore(
      createRootReducer(history), // root reducer with router state
      preloadedState,
      composeEnhancers(
        applyMiddleware(thunk),
        applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
      ))
    )
  
    return store
}