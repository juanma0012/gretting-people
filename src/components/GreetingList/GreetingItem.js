import React from 'react'
import PropTypes from 'prop-types'

const GreetingItem = ({ text }) => (
    <li className="greetingItem">{text}</li>
)

GreetingItem.propTypes = {
    text: PropTypes.string.isRequired
}

export default GreetingItem
