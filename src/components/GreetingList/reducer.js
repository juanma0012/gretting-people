import { resolveEach } from 'redux-resolver'
import { updateObject } from '../../shared/utility';
import * as actionTypes from './actionTypes'

const initialState = {
    greetings: []
};

const setGreetings = (state, action) => {
    console.log("action", action);
    return updateObject(state, {
        greetings: action.greetings
    });
};

export default resolveEach(initialState, {
    [actionTypes.SET_GREETINGS]: setGreetings
});
