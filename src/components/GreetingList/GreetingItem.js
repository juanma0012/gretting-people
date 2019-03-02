import React from 'react'
import PropTypes from 'prop-types'

const Greeting = ({ text }) => (
    <li className="Greeting">{text}</li>
)

Greeting.propTypes = {
    text: PropTypes.string.isRequired
}

export default Greeting
