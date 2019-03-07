import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';
import './peopleForm.css';

const PeopleForm = ({ onSetPeople }) => {
    let value;
    const typingNames = e => {
        onSetPeople(e.target.value);
    }
    return (
        <div className="peopleForm">
            <textarea value={value} onChange={typingNames}></textarea>
        </div>
    )
};

PeopleForm.propTypes = {
    onSetPeople: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onSetPeople: (people) => dispatch(actions.setPeople(people))
});

export default connect(
    null,
    mapDispatchToProps
)(PeopleForm);
