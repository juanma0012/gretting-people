import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import GreetingItem from './GreetingItem';
import './GreetingList.css';

const GreetingList = ({ greetings }) => {
    const greetingAllPeople = greetings.map((greeting, i) => (
        <GreetingItem key={i} text={greeting} />
    ));
    return (
        <div className="GreetingList">
            <ul>
                {greetingAllPeople}
            </ul>
        </div>
    )
};

GreetingList.propTypes = {
    greetings: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    greetings: state.greetingList.greetings
});

export default connect(
    mapStateToProps
)(GreetingList);
