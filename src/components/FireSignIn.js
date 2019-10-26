import React from 'react';
import {auth} from '../config';
import Trial  from '../Pages/HomeMade';
import Entry from '../Pages/SingIn';
import Takeatt from '../Pages/Class';

class FireAuthentication extends React.Component{
    constructor(props){
        super(props)
      this.state ={user:{}}
       this.authListener=this.authListener.bind(this);
    }
    componentDidMount(){
        this.authListener();
    }
    
    authListener(){
 auth.onAuthStateChanged(user=>{
     if(user){
        this.setState({user});
        console.log("Succesful");
    }
        else {
            this.setState({user:null});
            console.log("unsuccesful");
        };
     })
 }
 render(){
     return(
         <div>
         {this.state.user?(<Trial/>):(<Takeatt/>)}
         </div>
     )
 }
}
export default FireAuthentication;