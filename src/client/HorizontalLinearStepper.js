import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CloneView from './clone/CloneView.js'


injectTapEventPlugin();

/**
 * A contrived example using a transition between steps
 */
class HorizontalTransition extends React.Component {
  constructor(props) {
      super(props)
      this._onSUTCloned = this._onSUTCloned.bind(this)
      this._onTestRepoCloned = this._onTestRepoCloned.bind(this)
  }

  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
  };

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };


  _onSUTCloned(sutRepoURL) {
      this.setState({sutRepoURL: sutRepoURL})
  }
  _onTestRepoCloned(testRepoURL) {
      this.setState({testRepoURL: testRepoURL})
  }

  getStepContent(stepIndex) {
    var style = {marginTop: 0, width:300};
    switch (stepIndex) {
      case 0:
        return (
            <CloneView exampleRepo={"https://github.com/nirnaor/calculator"}
            description={"This is the repository that has the bug that you want to bisect.The bisect will run against  the master branch."}
            onRepoCloned={this._onSUTCloned}
            />
        );
      case 1:
        return (
            <CloneView exampleRepo={"https://github.com/nirnaor/calculator"}
            description={"This is the testing repository that contains the script to run with the bisect. The test will run with the master branch of this repository."}
            onRepoCloned={this._onTestRepoCloned}
            />
        );
      case 2:
        return (
          <p>
            System under test: {this.state.sutRepoURL}
            Testing repository: {this.state.testRepoURL}
          </p>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>System under test repository</StepLabel>
          </Step>
          <Step>
            <StepLabel>Testing repository</StepLabel>
          </Step>
          <Step>
            <StepLabel>Summary</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

export default HorizontalTransition;
