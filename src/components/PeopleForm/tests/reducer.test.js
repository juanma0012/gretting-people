import reducer from '../reducer';
import * as actionTypes from '../actionTypes';

describe('PeopleForm reducer', () => {
    describe('WHEN is initialized', () => {
        it('SHOULD return the initial state with people = []', () => {
            expect(reducer(undefined, {})).toEqual({
                people: []
            });
        });
    });
    describe('WHEN dispatch the action SET_PEOPLE', () => {
        it('SHOULD store the names in people state', () => {
            expect(reducer({
                people: []
            }, {
                    type: actionTypes.SET_PEOPLE,
                    people: ["Bob", "Tom", "Adam"]
                })).toEqual({
                    people: ["Bob", "Tom", "Adam"]
                });
        })
    });
});
