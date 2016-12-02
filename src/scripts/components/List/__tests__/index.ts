import { reducer, RECEIVE } from '../';

describe('reducer', () => {
    it('returns default state', () => {
        expect(
            reducer([], { type: 'foobar', payload: ['a', 'b'] })
        ).toEqual([]);
    });

    it('receive items', () => {
        expect(
            reducer([], { type: RECEIVE, payload: ['a', 'b'] })
        ).toEqual(['a', 'b']);
    });
});
