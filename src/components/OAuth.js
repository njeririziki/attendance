import React from 'react';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Header from './HeadComp';

class GoAuth extends React.Component{
    state={isSignedIn: null};
     
        
    
        componentDidMount(){
            window.gapi.load('client:auth2',()=>{
                window.gapi.client.init({
                    clientId:'1062595945502-uoqr6rpqtn7o7d93ke7b1fe5qltr1j47.apps.googleusercontent.com',
                    scope:'email'      
    
                }).then(()=>{
                    this.auth= window.gapi.auth2.getAuthInstance();
                    this.setState({isSignedIn:this.auth.isSignedIn.get()
             });
              this.auth.isSignedIn.listen(this.oauthChange)
                });
            });
        }
        oauthChange=()=>{
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
        }; 
        oauthSignIn=()=>{
            this.auth.signIn()
        }
        oauthSignOut=()=>{
            this.auth.signOut()
        }
        AuthButton(){
            if(this.state.isSignedIn===null){
                return<div>
                <p>Please sign in first</p>
                </div>;
         }
         else if(this.state.isSignedIn ===true){
                return <div>   
                <Button  
                variant='contained' 
                component={Link} to='/home'
           style={{backgroundColor:'#F2F2F2'}}>
           You are signed in
           </Button> 
                </div> 
                 
            } else{
                return <div>   
                <Button onClick={this.oauthSignIn}
                 variant='contained' 
           style={{backgroundColor:'#F2F2F2'}}>
           sign in with google
           </Button>
                 </div>  
            }
            
        }
       

        render(){
        
            return(
                <div>
                <Header 
                butt= 'sign out'
                googleLogOut={this.oauthSignOut}
                head='Attendance'/>
                <br/><br/><br/>
                {this.AuthButton()}
              
               </div>
            )
            }   
    }
    
    export default GoAuth;
{/**const GoAuth=()=>{

 const [isSignedIn,setIsSignedIn]=useState(null);

onClick={this.oauthSignOut}
      useEffect(()=>{
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'1062595945502-uoqr6rpqtn7o7d93ke7b1fe5qltr1j47.apps.googleusercontent.com',
                scope:'email'      

            }).then(()=>{
                const auth= window.gapi.auth2.getAuthInstance();
                setIsSignedIn({isSignedIn:auth.isSignedIn.get()
         });
          auth.isSignedIn.listen(oauthChange)
            });
        });
    })
    const oauthChange=()=>{
    setIsSignedIn({isSignedIn:auth.isSignedIn.get()})
    }; 
    const oauthSignIn=()=>{
        auth.signIn()
    }
    const oauthSignOut=()=>{
        auth.signOut()
    }
   function AuthButton(){
        if(isSignedIn===null){
            return null;
     }
     else if(isSignedIn ===true){
            return <div>   
            <Button  onClick={oauthSignOut}
            variant='contained' 
       style={{backgroundColor:'#F2F2F2'}}>
       sing out
       </Button> 
            </div> 
             
        } else{
            return <div>   
            <Button onClick={oauthSignIn}
             variant='contained' 
       style={{backgroundColor:'#F2F2F2'}}>
       sign in with google
       </Button>
             </div>  
        }
        
    }
        return(
           
         <div>{AuthButton()}</div>
          
            goToHome(){
            if(this.state.isSignedIn ===true){
                return <div>
               
                </div>
            }
        }
        )
       
    }

export default GoAuth;
 */}