import { resolveEach } from 'redux-resolver'
import { updateObject } from '../../shared/utility';
import * as actionTypes from './actionTypes'

const setPeople = (state, action) => {
    console.log("action", action)
    return updateObject(state, {
        people: action.people
    });
};

export default resolveEach([], {
    [actionTypes.SET_PEOPLE]: setPeople
})