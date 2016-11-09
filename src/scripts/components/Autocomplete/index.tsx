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

const reducers = combineReducers({
    list: list
});
let store = createStore(reducers);

store.dispatch(receive(['z', 'x']));

// Main container for whole application
const App = (
    <Provider store={store}>
        <Component />
    </Provider>
);

render(App, document.getElementById('root'));
