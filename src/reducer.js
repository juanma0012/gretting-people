import { combineReducers } from 'redux';
import peopleForm from './components/PeopleForm/reducer';
import languageDropdown from './components/LanguageDropdown/reducer';
import greetingList from './components/GreetingList/reducer';

export default combineReducers({
    peopleForm,
    languageDropdown,
    greetingList
});
