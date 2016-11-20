import {
    createAction,
    handleActions,
    Action
} from 'redux-actions';
import TabsList from './TabsList';

type Tabs = Array<any>;

// Actions
const OPEN = 'components/Tabs/OPEN';

const defaultState = {
    list: [
        {
            name: 'Description',
            content: 'Te mea veniam consequat, per regione indoctum in. In fierent corrumpit nam, admodum fuisset at sea. Modus ornatus accusata eum ea, nec solum oratio democritum ut.',
            key: 'description'
        },
        {
            name: 'Images',
            key: 'images'
        },
        {
            name: 'Amenities',
            key: 'amenities'
        }
    ],
    activeTabKey: 'description'
};
// Reducer
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Action creators

export {
    TabsList as default,
    reducer
}