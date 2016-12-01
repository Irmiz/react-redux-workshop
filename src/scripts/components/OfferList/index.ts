import {
    createAction,
    Action
} from 'redux-actions';
import OfferList from './OfferList';

type Offers = Array<any>;

// Actions
const PUSH = 'components/Offers/push';

// Reducer
const reducer = (state, action: Action) => {
    switch (action.type) {
        case PUSH:
            return [...state, action.payload];
        default:
            return state;
    }
};

// Action creators
export const push = createAction<Offers>(PUSH);

export {
    OfferList as default,
    reducer
}
