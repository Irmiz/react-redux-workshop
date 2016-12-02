import * as React from 'react';
import { render } from 'react-dom';
import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
    default as List,
    reducer as listReducer
} from 'components/List';
import {
    default as DropDown,
    reducer as optionsReducer
} from 'components/DropDown';

const reducers = combineReducers({
    list: listReducer,
    options: optionsReducer
});
let store = createStore(reducers, applyMiddleware(thunk));

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
