import { resolveEach } from 'redux-resolver'
import { updateObject } from '../../shared/utility';
import * as actionTypes from './actionTypes'

const initialState = {
    people: [],
    test: "ANOTHER TEST"
};

const setPeople = (state, action) => {
    console.log("action", action)
    return updateObject(state, {
        people: action.people
    });
};

export default resolveEach(initialState, {
    [actionTypes.SET_PEOPLE]: setPeople
})