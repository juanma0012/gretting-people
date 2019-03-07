import { greetingByLanguage } from '../../shared/utility';
import * as actionTypes from './actionTypes';

export const setGreetings = (people, language) => {
    let greetings = people.map(person => greetingByLanguage[language](person));
    return { type: actionTypes.SET_GREETINGS, greetings };
};
