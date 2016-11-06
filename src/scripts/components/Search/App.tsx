import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers } from 'components/Search';

let store = createStore(reducers);

// Main container for whole application
const App = () => (
    <div>bart</div>
);

export default (
    <Provider store={store}>
        <App />
    </Provider>
);
