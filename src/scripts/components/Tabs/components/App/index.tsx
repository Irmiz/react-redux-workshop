import * as React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux';
import { reducer as tabsReducer } from 'components/Tabs/components/TabsList';
import { reducer as imageReducer } from 'components/Tabs/components/ImageList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TabsList from 'components/Tabs/components/TabsList';

const reducers = combineReducers({
    tabs: tabsReducer,
    images: imageReducer
});

let store = createStore(reducers);

// Main container for whole application
const TabsApp = (
    <Provider store={store}>
        <TabsList />
    </Provider>
);

render(TabsApp, document.getElementById('tabs'));
