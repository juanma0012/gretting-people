import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'

const GreetingList = ({ greetings }) => {
    const greetingAllPeople = greetings.map((greeting, i) => (
        <li key={i}>{greeting}</li>
    ))

    return (
        <ul>
            {greetingAllPeople}
        </ul>
    )
}
GreetingList.propTypes = {
    greetings: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    greetings: state.greetingList.greetings
})

export default connect(
    mapStateToProps
)(GreetingList)
