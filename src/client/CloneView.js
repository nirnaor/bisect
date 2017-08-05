import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import RefreshIndicator from 'material-ui/RefreshIndicator';



const style = {marginTop: 0, width: 300}
const buttonStyle = {margin: 12}
const DoneView = (props) => {
    return (
        <p>
        Repo <b> {props.repositoryUrl}</b> cloned successfuly. Click next to move forward.
        </p>
    )
}

const CloningComponent = (props) => {
            return (
            <div>
            Cloning <b>{props.repositoryUrl}</b> from GitHub.
                <RefreshIndicator
                size={40}
                left={300}
                top={0}
                status="loading"
                style={style.refresh}
                />

            </div>
            )
}

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
            primary={true} />
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

class CloneView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repositoryUrl: 'some repo from github',
            status: 'start',
        }
        this._clone = this._clone.bind(this)
    }
	_handleChange(event) {
		this.setState({repositoryUrl: event.target.value})
	}

    _done(ev) {
        if (ev.target.status === 200) {
            console.log('done succeessfully')
            this.setState({status: 'done'})
        }
    }

    _clone(repositoryUrl) {
		console.log(`will clone now this repo: ${repositoryUrl}`)
		const xhr = new XMLHttpRequest()
		xhr.open('PUT', `/clone?url=${repositoryUrl}`)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.onload = this._done.bind(this)
		this.setState({status: 'cloning'}, ()=> xhr.send())
    }

    render() {
        if (this.state.status === 'start') {
            return <StartComponent repositoryUrl={this.state.repositoryUrl}
            onChange={this._handleChange}
            onCloneCLicked={this._clone}
            description={this.props.description}
                />
        } else if (this.state.status === 'cloning') {
            return <CloningComponent repositoryUrl={this.state.repositoryUrl}/>
        } else if (this.state.status === 'done') {
            return <DoneView repositoryUrl={this.state.repositoryUrl} />
        }
    }
}

CloneView.propTypes = {
    exampleRepo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}


export default CloneView
