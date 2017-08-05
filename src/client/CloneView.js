import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import RefreshIndicator from 'material-ui/RefreshIndicator';



const style = {marginTop: 0, width: 300}
const buttonStyle = {margin: 12}
    

class CloneView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: 'somerepo',
            status: 'start',
        }
        this._handleChange = this._handleChange.bind(this)
        this._clone = this._clone.bind(this)
    }
	_handleChange(event) {
		this.setState({url: event.target.value})
	}

    _done(ev) {
        if (ev.target.status === 200) {
            console.log('done succeessfully')
            this.setState({status: 'done'})
        }
    }

    _clone() {
		console.log(`will clone now this repo: ${this.state.url}`)
		const xhr = new XMLHttpRequest()
		xhr.open('PUT', `/clone?url=${this.state.url}`)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.onload = this._done.bind(this)
		this.setState({status: 'cloning'}, ()=> xhr.send())
    }

    render() {
        if (this.state.status === 'start') {
            return (
            <div>
            <TextField style={style} value={this.state.url}
			onChange={this._handleChange}
                floatingLabelText={this.props.exampleRepo}/>
            <RaisedButton style={buttonStyle}onClick={this._clone}
            label="Clone"
            primary={true} />
            <p>
            {this.props.description}
            </p>
            </div>
            )
        } else if (this.state.status === 'cloning') {
            return (
            <div>
            Cloning <b>{this.state.url}</b> from GitHub.
                <RefreshIndicator
                size={40}
                left={300}
                top={0}
                status="loading"
                style={style.refresh}
                />

            </div>
            )
        } else if (this.state.status === 'done') {
            return (
            <p>
                Repo <b> {this.state.url}</b> cloned successfuly. Click next to move forward.
            </p>
            )
        }
    }
}

CloneView.propTypes = {
    exampleRepo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}


export default CloneView
