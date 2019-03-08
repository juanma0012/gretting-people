import reducer from '../reducer';
import * as actionTypes from '../actionTypes';

describe('GreetingList reducer', () => {
    describe('WHEN is initialized', () => {
        it('SHOULD return the initial state with greetings = []', () => {
            expect(reducer(undefined, {})).toEqual({
                greetings: []
            });
        });
    });
    describe('WHEN dispatch the action SET_GREETINGS', () => {
        it('SHOULD store the new language in the state', () => {
            expect(reducer({
                greetings: []
            }, {
                    type: actionTypes.SET_GREETINGS,
                    greetings: ['new greeting in some language']
                })).toEqual({
                    greetings: ['new greeting in some language']
                });
        })
    });
});
