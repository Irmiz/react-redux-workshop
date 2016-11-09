import {
    createAction,
} from 'redux-actions';
import ProductList from './ProductList';

type Products = Array<any>;

let defaultState = window.appData.products;

// Actions
const PUSH = 'compontents/LazyPager/ProductList/push';

// Reducer
const reducer = (state = defaultState, action) => {
    switch (action.type) {
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
