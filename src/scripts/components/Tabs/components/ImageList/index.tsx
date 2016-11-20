import {
    createAction,
    handleActions,
    Action
} from 'redux-actions';
import ImageList from './ImageList';

type Images = Array<any>;

// Actions
const FETCH = 'components/Images/FETCH';

// Reducer
const reducer = handleActions<Images>({
    [FETCH]: (state: Images, action: Action<Images>): Images =>
        [...state, action.payload]
}, [] as Images);

// Action creators
export const fetch = createAction<{}, Images>(FETCH);

export {
    ImageList as default,
    reducer
}