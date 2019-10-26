import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import FireAuthentication from './components/FireSignIn';
import Trial  from './Pages/HomeMade';
import TakeAtt from './Pages/Class'
import FirstPg from './Pages/FirstPg';

    const AppRoot=()=>{
    return(
        <div>
        
        <BrowserRouter>
        
        <Route path='/' exact component={FirstPg}/>
        <Route path='/login' exact component={FireAuthentication}/>
        <Route path='/home'    component={Trial}/>
        <Route path='/class'    component={TakeAtt}/>
      
        </BrowserRouter>
        </div>
       
        
    )
};

export default AppRoot;