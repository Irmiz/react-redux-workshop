import {
    createAction,
    handleActions,
    Action
} from 'redux-actions';
import TabsList from './TabsList';

type Tabs = Array<any>;

// Actions
const OPEN = 'components/Tabs/OPEN';

const defaultState = [
    {
        name: 'tab1'
    },
    {
        name: 'tab2'
    }
];
// Reducer
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Action creators

export {
    TabsList as default,
    reducer
}