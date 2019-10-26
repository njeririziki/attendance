import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Menu} from '@material-ui/core';
import {Link} from 'react-router-dom';



 const Header=(props)=>{
    return(
      <div>
          <AppBar position='fixed' 
          style={{height:50,display:'flex',justifyContent:'center',backgroundColor:'#F5F5F5'}}>
              <Toolbar 
              style={{display:'flex',justifyContent:'space-between',padding:'5px,8px',height:40}}>
                  <Menu/>
                  <Typography variant='h4' noWrap 
                  style={{fontWeight:50,color:'#000000'}}
                  >
                  {props.head}
                  </Typography>
                  <div>
                      <Button 
                      variant='contained'
                       color='secondary'
                       component={Link}
                        target='_blank'
                        onClick={props.googleLogOut}
                        >
                        {props.butt} 
                        </Button>
                  </div>
                  
              </Toolbar>
          </AppBar> 
      </div>
    )
}

export default Header;