import * as actionTypes from './actionTypes';
import * as greetingActions from '../GreetingList/actions';

export const setLanguage = (language) => {
    return (dispatch, getState) => {
        dispatch({ type: actionTypes.SET_LANGUAGE, language });
        let state = getState();
        let people = state.peopleReducer.people;
        dispatch(greetingActions.setGreetings(people, language));
    }
};
