import {
    createAction,
    Action
} from 'redux-actions';
import DropDown from './DropDown';
import { receiveList } from 'components/List';
import request = require('superagent');

// Actions
const FETCH = 'component/DropDown/FETCH';

// Reducer
const defaultState = [
    'apple',
    'banana',
    'strawberry'
];

const reducer = (state = defaultState, action: Action<string>) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Action creators
const fetch = (fruit: string) => {
    return dispatch => {
        dispatch(createAction(FETCH));

        request
            .get(`http://localhost:3000/items?tag_like=${fruit}`)
            .set('Accept', 'application/json')
            .end((error, response) => {
                if (!error) {
                    dispatch(receiveList(response.body));
                }
            });
    };
};

export {
    DropDown as default,
    reducer,
    fetch
}
