import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';

const PeopleForm = ({ onSetPeople }) => {
    let value;
    const onChange = e => {
        onSetPeople(e.target.value);
    }
    return (
        <div>
            <form>
                <textarea value={value} rows="3" cols="20" onChange={onChange}></textarea>
            </form>
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
