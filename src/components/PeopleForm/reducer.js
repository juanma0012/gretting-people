import { resolveEach } from 'redux-resolver';
import { updateObject } from '../../shared/utility';
import * as actionTypes from './actionTypes';

const initialState = {
    people: []
};

const setPeople = (state, action) => {
    return updateObject(state, {
        people: action.people
    });
};

export default resolveEach(initialState, {
    [actionTypes.SET_PEOPLE]: setPeople
});
