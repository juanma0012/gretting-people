import * as actionTypes from './actionTypes';
import * as greetingActions from '../GreetingList/actions';

export const setPeople = (peopleString) => {
    return (dispatch, getState) => {
        let people = peopleString.split('\n').filter(item => item.trim() !== '');
        dispatch({ type: actionTypes.SET_PEOPLE, people });
        let state = getState();
        let language = state.languageReducer.language;
        dispatch(greetingActions.setGreetings(people, language));
    }
};
