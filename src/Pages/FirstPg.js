import React from 'react';
import {Button,Typography, Container} from '@material-ui/core';
import {Link} from 'react-router-dom';
import GoAuth from '../components/OAuth';


const FirstPg=()=>{
    
    return(
        <div style={{height:100,display:'block'}}>
        <div style={{alignItems:'center',marginTop:8}}>
       < Container>
       <Typography variant='h5'
       style={{textAlign:'left',color:'#007896'}}>
      Sign up
      </Typography><br/>
      <GoAuth/>
      <br/><br/>
      <Button variant='contained' 
      style={{backgroundColor:'#F2F2F2'}}
      component={Link} to='/login' >
     Log in
      </Button>
       </Container>
       <div>
      
       </div>
               
                </div> 
     
  
       </div>
    )
};

export default FirstPg;