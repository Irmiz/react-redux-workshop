import * as React from 'react';
import OfferList from 'components/OfferList';
import renderer = require('react-test-renderer');
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Offers component', () => {
    it('renders a list', () => {
        const store = mockStore({
            offers: [
                {
                    name: 'Bob'
                },
                {
                    name: 'Alice'
                }
            ]
        });
        const offersComponent = renderer.create(
            <Provider store={store}>
                <OfferList />
            </Provider>
        ).toJSON();

        expect(offersComponent).toMatchSnapshot();
    });

    it('renders empty list', () => {
        const store = mockStore({
            offers: []
        });
        const offersComponent = renderer.create(
            <Provider store={store}>
                <OfferList />
            </Provider>
        ).toJSON();

        expect(offersComponent).toMatchSnapshot();
    });
});
