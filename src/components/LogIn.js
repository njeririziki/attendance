import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import * as Icon from 'react-feather';
import {withRouter,Link} from 'react-router-dom';



const Goin=()=>{

    return(
        <div>
        <Typography variant='h4' noWrap>
        Log in 
        </Typography>
        
        <form noValidate>
        <TextField
        variant='outlined'
        margin='normal'
        label='Registration Number'
        id='regNo'
        name='regNo'
        required
        fullWidth
        />
        <TextField
        variant='outlined'
        margin='normal'
        label='Password'
        id='password'
        name='password'
        required
        fullWidth
        />
        <Button variant='contained' color='primary' component={Link} to='/two'>Log In</Button>
        </form>
        </div>
    )
}

export default Goin;
