import React from 'react'
import PropTypes from 'prop-types'
import RefreshIndicator from 'material-ui/RefreshIndicator'

const CloningComponent = (props) => {
    return (
        <div>
            Cloning <b>{props.repositoryUrl}</b> from GitHub.
            <RefreshIndicator
            size={40}
            left={300}
            top={0}
            status="loading"
            />

        </div>
    )
}

CloningComponent.propTypes = {
    repositoryUrl: PropTypes.string.isRequired,
}
export default CloningComponent
