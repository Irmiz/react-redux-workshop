import { reducer } from '../';

describe('reducer', () => {
    it('receive items', () => {
        expect(
            reducer([], {
                type: 'components/Items/RECEIVE',
                payload: ['a', 'b']
            })
        ).toEqual(
            ['a', 'b']
        );
    });
    it('return default state', () => {
        var z =[];
        expect(
            reducer(z, {
                type: 'kkkkk'
            })
        ).toEqual(z);
    });
});
