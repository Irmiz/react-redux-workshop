import { reducer, RECEIVE } from '../';

describe('reducer', () => {
    it('returns default state', () => {
        expect(
            reducer([], { type: RECEIVE, payload: { items: ['a', 'b'] } })
        ).toEqual([])
    });

    it('receive items', () => {

    });
});
