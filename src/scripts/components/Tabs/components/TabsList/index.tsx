import {
    createAction
} from 'redux-actions';
import TabsList from './TabsList';

type Tabs = Object;

// Actions
const OPEN = 'components/Tabs/OPEN';

const defaultState = {
    list: {
        description: {
            name: 'Description',
            content: 'Te mea veniam consequat, per regione indoctum in. In fierent corrumpit nam, admodum fuisset at sea. Modus ornatus accusata eum ea, nec solum oratio democritum ut.',
        },
        images: {
            name: 'Images',
        },
        amenities: {
            name: 'Amenities'
        }
    },
    activeTabKey: 'description'
};
// Reducer
const reducer = (state = defaultState, action: any = {}) => {
    switch (action.type) {
        case OPEN:
            return Object.assign({}, state, {activeTabKey: action.payload});
        default:
            return state;
    }
};

// Action creators
const open = createAction<Tabs>(OPEN);

export {
    TabsList as default,
    reducer,
    open
}