import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import * as actions from './actions'

const PeopleForm = ({ onClick }) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                onClick(input.value)
                input.value = ''
            }}>
                <textarea ref={node => input = node} rows="3" cols="20"></textarea>
                <button type="submit">
                    Add Todo
        </button>
            </form>
        </div>
    )
}
PeopleForm.propTypes = {
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
    people: state.people
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (people) => dispatch(actions.setPeople(people))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeopleForm)
