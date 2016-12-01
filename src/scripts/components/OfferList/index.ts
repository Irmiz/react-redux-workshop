import {
    createAction,
    handleActions,
    Action
} from 'redux-actions';
import OfferList from './OfferList';

type Offers = Array<any>;

// Actions
const PUSH = 'components/Offers/push';

// Reducer
const reducer = handleActions<Offers>({
    [PUSH]: (state: Offers, action: Action<Offers>): Offers =>
        [...state, action.payload]
}, [] as Offers);

// Action creators
export const push = createAction<Offers>(PUSH);

export {
    OfferList as default,
    reducer
}
