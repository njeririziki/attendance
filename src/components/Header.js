import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Header = (props) => {
  let path = props.path
  return (
    <div style={{padding:25}}>
      <AppBar position="fixed" style={{height:45,display:"flex",justifyContent:'center',backgroundColor:"#fff"}}>
        <Toolbar style={{display:'flex',justifyContent:'space-between',padding:'5px 8px'}}>            
          <Typography variant="body1" style={{fontWeight:500,color:"#000"}}>  Class Attendance </Typography>
          <div>
            {path === "/login"
            ? null
            :
              <Button variant="text" color="primary" size="small" style={{marginRight:5}} component={Link} to="/login">
                Login
              </Button>
            }
            {path === "/register"
            ? null
            :
            <Button variant="outlined" color="primary" size="small" component={Link} to="/register">
              Register
            </Button>
            }
          </div>   
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;