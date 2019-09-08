import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';

import App from './containers/App/App'
import configStore, { history } from './store/configStore'

export const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <App history={history} context={ReactReduxContext} />
    </Provider>, 
    document.getElementById('root')
);