import * as actionTypes from './actionTypes';

export const setPeople = (peopleString) => {
    console.log("peopleString",peopleString);
    let people =  peopleString.split('\n')
    return { type: actionTypes.SET_PEOPLE, people };
}
