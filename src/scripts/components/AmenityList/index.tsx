import {
    createAction
} from 'redux-actions';
import AmenityList from './AmenityList';

type Amenities = Array<any>;

// Actions
const RECEIVE = 'components/Amenities/RECEIVE';

// Reducer
const reducer = (state = [], action: any = {}) => {
    switch (action.type) {
        case RECEIVE:
            return Object.assign({}, state, {amenities: action.payload});
        default:
            return state;
    }
};

// Action creators
const receiveAmenities = createAction<Amenities>(RECEIVE);

export {
    AmenityList as default,
    reducer,
    receiveAmenities
}