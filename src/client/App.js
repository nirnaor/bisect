import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HorizontalLinearStepper from './HorizontalLinearStepper'

const App = () => (
    <MuiThemeProvider>
        <HorizontalLinearStepper/>
    </MuiThemeProvider>
)

window.addEventListener('DOMContentLoaded', ()=> {
ReactDOM.render(
    <App />,
    document.getElementById('app')
)
})
