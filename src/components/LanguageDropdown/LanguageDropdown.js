import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import * as actions from './actions'

const LanguageDropdown = ({ onSetLanguage }) => {
    let select;
    const languages = ['english', 'spanish', 'french', 'portuguese', 'italian'];
    const languagesList = languages.map((language, i) => (
        <option value={language} key={i}>{language.charAt(0).toUpperCase() + language.slice(1)}</option>
    ))
    const onChangeLanguage = e => {
        onSetLanguage(e.target.value);
    }
    return (
        <div>
            <form >
                <select value={select} onChange={onChangeLanguage}>
                    {languagesList}
                </select>
            </form>
        </div>
    )
}
LanguageDropdown.propTypes = {
    onSetLanguage: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    onSetLanguage: (people) => dispatch(actions.setLanguage(people))
})

export default connect(
    null,
    mapDispatchToProps
)(LanguageDropdown)
