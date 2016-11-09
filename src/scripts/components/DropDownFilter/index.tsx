import * as React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux';
import { default as List, reducer as list } from 'components/List';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import DropDown from 'components/DropDown';

const reducers = combineReducers({
    list
});
let store = createStore(reducers);

// Main container for whole application
const App = (
    <Provider store={store}>
        <div>
            <DropDown />
            <List />
        </div>
    </Provider>
);

render(App, document.getElementById('root'));
