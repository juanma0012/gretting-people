import reducer from '../reducer';
import { defaultLanguage } from '../../../shared/utility';
import * as actionTypes from '../actionTypes';

describe('LanguageDropdown reducer', () => {
    describe('WHEN is initialized', () => {
        it('SHOULD return the initial state with people = []', () => {
            expect(reducer(undefined, {})).toEqual({
                language: defaultLanguage
            });
        });
    });
    describe('WHEN dispatch the action SET_LANGUAGE', () => {
        it('SHOULD store the new language in the state', () => {
            expect(reducer({
                language: 'spanish'
            }, {
                    type: actionTypes.SET_LANGUAGE,
                    language: 'french'
                })).toEqual({
                    language: 'french'
                });
        })
    });
});
