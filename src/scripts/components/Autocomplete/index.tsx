import * as React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux';
import { reducer as offers } from 'components/OfferList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Component from './Component';

const reducers = combineReducers({
    offers
});
let store = createStore(reducers);

// Main container for whole application
const App = (
    <Provider store={store}>
        <Component />
    </Provider>
);

render(App, document.getElementById('root'));
