import React from 'react'
import PropTypes from 'prop-types'
import DoneComponent from './DoneComponent.js'
import CloningComponent from './CloningComponent.js'
import StartComponent from './StartComponent.js'


class CloneView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            repositoryUrl: 'some repo from github',
            status: 'start',
        }
        this._clone = this._clone.bind(this)
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
            onCloneCLicked={this._clone}
            description={this.props.description}
                />
        } else if (this.state.status === 'cloning') {
            return <CloningComponent repositoryUrl={this.state.repositoryUrl}/>
        } else if (this.state.status === 'done') {
            return <DoneComponent repositoryUrl={this.state.repositoryUrl} />
        }
    }
}

CloneView.propTypes = {
    exampleRepo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}


export default CloneView
