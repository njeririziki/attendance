import React from 'react';

import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'; 



const customStyles = {
  content : {
    top                   : '40%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-60%',
    transform             : 'translate(-50%, -50%)'
  }
};
 

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement')
 
class LecModal extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      modalIsOpen: false,
      unit:[]
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.submitUnit=this.submitUnit.bind(this);
  }
  componentDidMount(){
    try{
  const json=localStorage.setItem('units');
  const units=JSON.parse(json);
  if(units){
    this.setState(()=>({unit:units}));
  }
    }catch{}
  }
  componentDidUpdate(){
    if(this.state.unit.length>0){
   const json=JSON.stringify(this.state.unit);
   localStorage.setItem('units',json);
    }
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = '#f00';
    //<h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
  }
  submitUnit(e){
    e.preventDefault();
   const unitName=e.target.elements.unitNm.value.trim();
   if (unitName){
     this.setState((prevState)=>{
       return{unit:prevState.unit.concat([unitName])};
     });
    
   }
    
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div >
        <Button onClick={this.openModal} 
         variant='contained'
         color='primary'>Add unit</Button>
        <Modal
        
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
         
          style={customStyles}
          contentLabel="Example Modal"
        > 
          <form onSubmit={this.submitUnit}>
          Faculty
          <Select
          fullWidth >
          <option value='scii'>SCII</option>
          <option value='scci'>SCCI</option>          
          </Select>
          <fieldset>
          <legend>Select your school</legend>
          <Select
          variant='outlined'
          margin='normal'
          label='School'
          id='sch'
          name='sch'
          fullWidth
          style={{alignContent:'center'}}>
           <option value='scit'>SCIT</option>
           <option value='btcf'>BTCF</option>
           </Select>
          </fieldset>
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
         name='unitNm'
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
        
        <br/>
        <Button 
     type='submit'
        variant='contained'
        color='default'
        >
        submit
        </Button>  
          </form>
          <Button onClick={this.closeModal} 
           variant='contained'color='default'
           >
           cancell
           </Button>
        </Modal>
        <br/>
        {this.state.unit.map((units)=>
          <li key={units} >{units}</li>)}
     
      </div>
    );
  }
}
 
export default LecModal;

{/**  */}