import React from 'react'
import PropTypes from 'prop-types'
import CloneView from './clone/CloneView.js'

class RepositoriesComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        switch (this.props.stepIndex) {
            case 0:
                return (
                    <CloneView type='sut' exampleRepo={'https://github.com/nirnaor/calculator'}
                    description={'This is the repository that has the bug that you want to bisect.The bisect will run against  the master branch.'}
                    />
                )
            case 1:
                return (
                    <CloneView type='test' exampleRepo={'https://github.com/nirnaor/calculator'}
                    description={'This is the testing repository that contains the script to run with the bisect. The test will run with the master branch of this repository.'}
                    />
                )
            case 2:
                return (
                    <p>
                    Youv'e successfuly cloned your system under test and test repositories. Click finish 
                    to go to the bisect configuration.
                    </p>
                )
            default:
                return 'You\'re a long way from home sonny jim!'
        }
    }
}

RepositoriesComponent.propTypes = {
    stepIndex: PropTypes.number.isRequired,
}

export default RepositoriesComponent
