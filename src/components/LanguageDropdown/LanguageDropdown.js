import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import { greetingByLanguage, toCapitalLetter } from '../../shared/utility';
import * as actions from './actions'
import './languageDropdown.css';

export const LanguageDropdown = ({ onSetLanguage }) => {
    let select;
    let languages = Object.keys(greetingByLanguage);
    const languagesList = languages.map((language, i) => (
        <option value={language} key={i}>{toCapitalLetter(language)}</option>
    ));
    const onChangeLanguage = e => onSetLanguage(e.target.value);

    return (
        <div className="languageDropdown">
            <select value={select} onChange={onChangeLanguage}>
                {languagesList}
            </select>
        </div>
    )
};

LanguageDropdown.propTypes = {
    onSetLanguage: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onSetLanguage: (people) => dispatch(actions.setLanguage(people))
});

export default connect(
    null,
    mapDispatchToProps
)(LanguageDropdown);
