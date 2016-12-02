import {
    createAction
} from 'redux-actions';
import ImageList from './ImageList';

type Images = Array<any>;

// Actions
const RECEIVE = 'components/Images/RECEIVE';

// Reducer
const reducer = (state = [], action: any = {}) => {
    switch (action.type) {
        case RECEIVE:
            return Object.assign({}, state, {images: action.payload});
        default:
            return state;
    }
};

// Action creators
const receiveImages = createAction<Images>(RECEIVE);

export {
    ImageList as default,
    reducer,
    receiveImages
}