import * as React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux';
import {
    default as TabsList,
    reducer as tabsReducer
} from 'components/TabsList';
import { reducer as imageReducer } from 'components/ImageList';
import { reducer as amenityReducer } from 'components/AmenityList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducers = combineReducers({
    tabs: tabsReducer,
    images: imageReducer,
    amenities: amenityReducer
});

let store = createStore(reducers);

// Main container for whole application
const TabsApp = (
    <Provider store={store}>
        <TabsList />
    </Provider>
);

render(TabsApp, document.getElementById('tabs'));
