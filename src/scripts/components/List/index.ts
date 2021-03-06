import { createAction } from 'redux-actions';
import List from './List';

const initialState = [];

// Actions
const RECEIVE = 'components/List/RECEIVE';

// Reducer
const reducer = (state = initialState, action: any = {}) => {
    switch (action.type) {
        case RECEIVE:
            if (action.payload) {
                return [].concat(action.payload);
            }

            return [];
        default: return state;
    }
};

// Action Creators
const receiveList = createAction(RECEIVE);

// Exports
export {
    List as default,
    reducer,
    receiveList,
    RECEIVE
};
