import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

const style = {marginTop: 0, width: 300}

class CloneView extends React.Component {
    render() {
        return (
          <div>
            <TextField style={style}
            floatingLabelText={this.props.exampleRepo}/>
            <p>
            {this.props.description}
            </p>
          </div>
        )
    }
}

CloneView.propTypes = {
    exampleRepo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}


export default CloneView
