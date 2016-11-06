import { render } from 'react-dom';
import App from './App';
import { combineReducers } from 'redux';
import { reducer as offers } from 'components/OfferList';

render(App, document.getElementById('root'));

const reducers = combineReducers({
    offers
});

export {
    App as default,
    reducers
};
