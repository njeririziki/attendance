import React from 'react';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 500,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: 'none',    
      top: '10%',
      left: '35%',
    },
  }));
const ClsModal=(props)=> {
  const classes=useStyles();

        return(
      
        <Modal
        isOpen={!!props.ctrlClsModal}
        contentLabel='Add your unit here'
        >
        <div className={classes.paper}>
        <form
        onSubmit={props.takeUnitNm}>
        Unit Name 
        <TextField
        variant='outlined'
        margin='normal'
        label='unit name'
        id='unitnm'
        name='unitnm'
        required
       fullWidth
        />
        <Button
         type='submit' 
         name='submit'
         variant='contained' 
         color='inherit'
        >
        Submit
        </Button>
        </form>
        <br/>
        <Button 
        onClick={props.closeClsModal}
        variant='contained' 
        color='inherit'
        > close
        </Button>
        </div> 
        </Modal>
       
          
     
      
       )
    
        };


export default ClsModal;