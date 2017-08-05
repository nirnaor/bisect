import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const style = {marginTop: 0, width: 300}
const buttonStyle = {margin: 12}

class StartComponent extends React.Component {
    constructor(props) {
        super(props)
        this._handleChange = this._handleChange.bind(this)
        this._handleCloneClicked = this._handleCloneClicked.bind(this)
        this.state = {
            repositoryUrl: '',
        }
    }
    _handleChange(ev) {
        this.setState({repositoryUrl: ev.currentTarget.value})
    }
    _handleCloneClicked() {
        this.props.onCloneCLicked(this.state.repositoryUrl)
    }
    render() {
        return (
            <div>
                <TextField style={style} value={this.state.repositoryUrl}
                onChange={this._handleChange}
                />
                <RaisedButton style={buttonStyle} onClick={this._handleCloneClicked}
                label="Clone"
                primary={false} />
                <p>
                    {this.props.description}
                </p>
            </div>
        )
    }
}

StartComponent.propTypes = {
    description: PropTypes.string.isRequired,
    onCloneCLicked: PropTypes.func.isRequired,
}

export default StartComponent
