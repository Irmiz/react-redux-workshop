import Component from './Component';
import { createAction } from 'redux-actions';
const defaultState = [
    'a',
    'b'
];

// Actions
const RECEIVE = 'components/Items/RECEIVE';

// Reducer
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case RECEIVE:
            return action.payload;
        default:
            return state;
    }
};

// Action creators
const receive = createAction(RECEIVE);

export {
    Component as default,
    reducer,
    receive
}
