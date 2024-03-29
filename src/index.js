import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import AppRoot from './AppRoot'

import * as serviceWorker from './serviceWorker';


const theme = createMuiTheme({ 
 
});

function AppProvider() {
    return (
      <ThemeProvider theme={theme}>
        <AppRoot/>
      </ThemeProvider>
    );
    }


  
ReactDOM.render(<AppProvider/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 