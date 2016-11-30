import * as React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux';
import {
    default as ProductList,
    reducer as products,
    push as productsPush
} from 'components/LazyPager/ProductList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// All app reducers
const reducers = combineReducers({
    products
});

// Store
let store = createStore(reducers);

// Default data
store.dispatch(productsPush(window.appData.products));

// Main container for whole application
const App = (
    <Provider store={store}>
        <ProductList />
    </Provider>
);

render(App, document.getElementById('root'));
