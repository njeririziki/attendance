import React from 'react';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const customStyles={
    content: {
      top:'50%',
      left: '50%',
      right : 'auto',
      bottom : 'auto',
      marginRight : '-50%',
      transform : 'translate(-50%,-50%)'
    }

}

const MyModal=(props)=>{
 return(
        <div>
       
           <Modal
           isOpen={!!props.modalIsOpen}
           onRequestClose={props.closeModal}
           ariaHideApp= {false}
           style={customStyles}
           contentLabel='Add unit'
           >  
           <div>
           <form >
           <TextField
           variant='outlined'
           margin='normal'
           label='Department'
           id='dept'
           name='dept'
           required 
           fullWidth
           style={{alignContent:'center'}}
           /><br/>
           <TextField
           variant='outlined'
           margin='normal'
           label='unit name'
           id='unitnm'
           name='unitnm'
           required
          fullWidth
           />
           <TextField
           variant='outlined'
           margin='normal'
           label='unit code'
           id='unitcd'
           name='unitcd'
           required
          fullWidth
           />
         
             <Button 
             type='submit'
              variant='contained'
             color='default'>submit</Button>
             <Button
               onClick={props.closeModal}
              variant='contained'
              color='default'>close
              </Button>
           </form>
           </div>
           </Modal> 
           
        </div>
  
    )
};
 export default MyModal;