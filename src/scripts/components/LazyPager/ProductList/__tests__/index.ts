import { reducer } from 'components/LazyPager/ProductList';

describe('reducer', () => {
    it('returns default state', () => {
        expect(reducer(undefined, {type: ''}))
            .toEqual([]);
    });
});
