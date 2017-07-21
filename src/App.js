import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HorizontalLinearStepper from './HorizontalLinearStepper';
import LinearProgress from 'material-ui/LinearProgress';

const App = () => (
	<MuiThemeProvider>
		<HorizontalLinearStepper/>
	</MuiThemeProvider>
);

window.addEventListener("DOMContentLoaded", ()=> {
ReactDOM.render(
	<App />,
	document.getElementById('app')
);
});
