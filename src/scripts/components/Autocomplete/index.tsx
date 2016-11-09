import * as React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux';
import {
    reducer as list
    receive
} from 'components/Items';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Component from './Component';
import request = require('superagent');

const reducers = combineReducers({
    list: list
});
let store = createStore(reducers);

request
    .get('http://localhost:3000/items?tag_like=apple')
    .set('Accept', 'application/json')
    .end((error, response) => {
        if (!error) {
            store.dispatch(receive(response.body));
        }
    });

// Main container for whole application
const App = (
    <Provider store={store}>
        <Component />
    </Provider>
);

render(App, document.getElementById('root'));
