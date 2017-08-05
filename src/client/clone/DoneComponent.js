import React from 'react'
import PropTypes from 'prop-types'

const DoneComponent = (props) => {
    return (
        <p>
            Repo <b> {props.repositoryUrl}</b> cloned successfuly. Click next to
            move forward.
        </p>
    )
}

DoneComponent.propTypes = {
    repositoryUrl: PropTypes.string.isRequired,
}

export default DoneComponent
