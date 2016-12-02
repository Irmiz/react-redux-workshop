import {
    createAction,
    Action
} from 'redux-actions';
import TabsList from './TabsList';

type Tabs = Object;

// Actions
const OPEN = 'components/Tabs/OPEN';

const defaultState = {
    list: window['appData'],
    activeTabKey: 'description'
};

// Reducer
const reducer = (state = defaultState, action: Action<Tabs>) => {
    switch (action.type) {
        case OPEN:
            return Object.assign({}, state, {activeTabKey: action.payload});
        default:
            return state;
    }
};

// Action creators
const open = createAction<Tabs>(OPEN);

export {
    TabsList as default,
    reducer,
    open
}
