import {
    createAction,
} from 'redux-actions';
import ProductList from './ProductList';

type Products = Array<any>;

// Actions
const PUSH = 'compontents/LazyPager/ProductList/push';

// Reducer
const reducer = (state = [], action) => {
    switch (action.type) {
        case PUSH:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

// Action creators
export const push = createAction<{}, Products>(PUSH);

export {
    ProductList as default,
    reducer
}
