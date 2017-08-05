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
            url: '',
        }
        this._handleChange = this._handleChange.bind(this)
        this._clone = this._clone.bind(this)
    }
	_handleChange(event) {
		this.setState({url: event.target.value})
	}
    _clone() {
		console.log(`will clone now this repo: ${this.state.url}`)
		const xhr = new XMLHttpRequest()
		xhr.open('PUT', `/clone?url=${this.state.url}`)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.onload = function() {
			if (xhr.status === 200) {
                console.log('done succeessfully')
			}
		}
		this.setState({cloning: true}, ()=> xhr.send())
    }

    render() {
        return (
          <div>
            <TextField style={style} value={this.state.url}
			onChange={this._handleChange}
                floatingLabelText={this.props.exampleRepo}/>
            <RaisedButton style={buttonStyle}onClick={this._clone}
            label="Clone"
            primary={true} />
            {this.state.cloning &&
                <RefreshIndicator
                size={40}
                left={10}
                top={0}
                status="loading"
                style={style.refresh}
                />
            }
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
