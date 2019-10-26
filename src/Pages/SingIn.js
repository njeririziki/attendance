import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Header from '../components/HeadComp';
import { Container } from '@material-ui/core';
import {auth} from '../config';

const SignInState={
  email:'',
  password:''
}

class SignUpForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {...SignInState  }
    this.handleSignIn=this.handleSignIn.bind(this);
    this.onChangeForm=this.onChangeForm.bind(this)
  }
  handleSignIn = event=>{
    event.preventDefault();
    const {email,password} = this.state;
    auth.signInWithEmailAndPassword(email,password)
    console.log('unsuccessfull')
  }
  onChangeForm(e){
    this.setState({[e.target.name]:e.target.value})
  }
  render() { 
    return (  
      <div >
      <Header 
      butt=''
      head='Attendance'/>
      <br/> <br/> <br/> <br/>
     <Container>
     <Typography variant='h5' noWrap 
      style={{fontWeight:50,color:'#008975'}}>
      Log In
      </Typography>
      <form    onSubmit ={this.handleSignIn}>
      <TextField
      variant='outlined'
      margin='normal'
      label='Email'
      id='email'
      name='email'
      type='text'
      onChange={ this.onChangeForm}
      required 
      fullWidth
      style={{alignContent:'center'}}
      /><br/>
      <TextField
      variant='outlined'
      margin='normal'
      label='Password'
      id='password'
      name='password'
      type='password'
      onChange={ this.onChangeForm}
      required
     fullWidth
      />
      <Button
      variant='contained'
       color='default'
       type='submit'
       >
       Log In</Button>
    </form>
     
      
     </Container>
       </div>
    );
  }
}
 
export default SignUpForm;
