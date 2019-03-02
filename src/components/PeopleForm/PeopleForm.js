import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';
import './PeopleForm.css';

const PeopleForm = ({ onSetPeople }) => {
    let value;
    const onChange = e => {
        onSetPeople(e.target.value);
    }
    return (
        <div className="PeopleForm">
            <textarea value={value} onChange={onChange}></textarea>
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
