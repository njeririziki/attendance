import React from 'react';
import {Slide} from '@material-ui/core';
import MyModal from '../components/RedoModal';
import LecModal from '../components/lecModal';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import * as Icon from 'react-feather';



const drawerWidth=240;

const useStyle = makeStyles(theme=>({
    root :{
        display: 'flex',},
    drawer:{ 
        width:drawerWidth,
    flexShrink:0,},
    drawerPaper:{
      width:drawerWidth
    },
    appbar:{
        width:`calc(100%-${drawerWidth})`
    },
    menubutton:{
        marginRight:theme.spacing(2),
        
    },
    toolbar:theme.mixins.toolbar,
    content:{
        flexGrow:1,
        padding:theme.spacing(3)
        
    }
}))

 const Trial =(props) =>{
const classes=useStyle();
const [open,setOpen]=React.useState(false);
const [modalIsOpen,setModalIsOpen]= React.useState(undefined);


function openModal(){
  setModalIsOpen('please')
};

function closeModal(){
  setModalIsOpen(undefined)
};
function openDrawer(){
  setOpen(true)
}
function closeDrawer(){
  setOpen(false)
}


   
    return(
      <div >
      <CssBaseline/>
      <AppBar className={classes.appbar}>
      <Toolbar>
      <IconButton
      color='inherit'
      aria-label='open drawer'
      onClick={openDrawer} 
      edge='start'
      className={classes.menubutton}
      >
      <Icon.Menu/>
      </IconButton>
      <Typography variant='h6' noWrap>
      Attendance 
      </Typography>
      </Toolbar>
      </AppBar>
      <Drawer
      variant='temporary'
      className={classes.drawer}
      open={open}
      onClose={closeDrawer}
      anchor='left'
      classes={{paper:classes.drawerPaper}}>
      <Button onClick={openModal}
      variant='contained'
       color='primary'>
       Add unit
       </Button>
    
      <List style={{padding:0}}>
      {['Web','Linux','Sunshine'].map((text,index)=>(
          <ListItem button key={text}>
          <ListItemIcon> {index % 2 === 0 ? <Icon.Inbox /> :
              <Icon.Mail />}</ListItemIcon>
          <ListItemText primary={text}/>
          <Divider/>
          </ListItem> 
      ))}
      </List> 
      </Drawer>
      <main className={classes.content} >
      <div className={classes.toolbar}>
      <br/> <br/>
    
      <MyModal
      openModal={modalIsOpen}
      closeModal={closeModal}
      />
      <br/>
      <LecModal/>
      <br/>
      <Button variant='contained' 
      color='secondary'
      component={Link}
      to='/class'>
      Classes
      </Button>
      <br/>
     
       </div>
  </main>

      </div>
      
    
     )
  
 }

export default Trial;
/**  <Header 
      head='Take attendance'
      butt='log out'/>
      <br/><br/><br/><br/> */