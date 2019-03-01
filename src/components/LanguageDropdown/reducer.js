import { resolveEach } from 'redux-resolver';
import { updateObject } from '../../shared/utility';
import * as actionTypes from './actionTypes';

const initialState = {
    language: "english"
};

const setLanguage = (state, action) => {
    return updateObject(state, {
        language: action.language
    });
};

export default resolveEach(initialState, {
    [actionTypes.SET_LANGUAGE]: setLanguage
});
