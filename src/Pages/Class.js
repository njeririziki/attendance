import React from 'react';
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
import {auth} from '../config';
import * as Icon from 'react-feather';
import ClsModal from '../components/ClsModal';
import { Button } from '@material-ui/core';




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
        display:'none',
    },
    toolbar:theme.mixins.toolbar,
    content:{
        flexGrow:1,
        padding:theme.spacing(3)
    }
}))


const drawerWidth=250;
class TakeAtt extends React.Component{
  
   
    constructor(props){
        super(props);
        this.state={ units:['Web'],
        modalOpener: undefined,
        openDrawer:false
        };
        
        this.takeUnitNm=this.takeUnitNm.bind(this);
        this.openClsModal=this.openClsModal.bind(this);
        this.closeClsModal=this.closeClsModal.bind(this);
        this.openerDrawer=this.openerDrawer.bind(this);
        this.closeDrawer=this.closeDrawer.bind(this);
        this.signingOut= this.signingOut.bind(this);
    }
  
componentDidMount(){
   try{const json=localStorage.getItem('options');
   const options=JSON.parse(json);
   if(options){
       this.setState(()=>({units:options}))
   }} catch{}
}  
componentDidUpdate(){
    if(this.state.units.length>0){
        const json=JSON.stringify(this.state.units);
        localStorage.setItem('options',json);
    }
}  
takeUnitNm(e){
    e.preventDefault();
    const unitNm= e.target.elements.unitnm.value.trim();
    if(unitNm){
        this.setState((prevState)=>{
            return {units:prevState.units.concat([unitNm])}})  
    }else{
        return 'Please Add a unit'
    }
    
}
openClsModal(){
    this.setState(()=>{
        return{modalOpener:'sup'}
        })
}
closeClsModal(){
    this.setState(()=>{
        return{modalOpener:undefined}
        })
}

    openerDrawer(){
 this.setState(()=>({openDrawer:true}) )
    }
 
    closeDrawer(){
        this.setState(()=>{
         return   {openDrawer:false}
        } )
           }  
  signingOut(){
            auth.signOut();  }     
    render(){
        return(
            <div >
            <CssBaseline/>
            <AppBar style={{  width:`calc(100%-${drawerWidth})`}}>
            <Toolbar>
            <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={this.openerDrawer} 
            edge='start'
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
            open={this.state.openDrawer}
            onClose={this.closeDrawer}
            anchor='left'
            style={{ width:drawerWidth}}    >
            <div>
            <Typography variant='h5' noWrap>
            Units:
            </Typography> 
            <List style={{padding:0}}>
            {this.state.units.map((text,index)=>(
                <ListItem button key={text}>
               
                <ListItemText primary={text}/>
                <Divider/>
                </ListItem> 
            ))}
            </List>
            </div>
            </Drawer>
            <main >
            <div style={{ display: 'flex',
            alignItems: 'center',
            padding: '0 4px',
            minHeight:48,
            justifyContent: 'flex-end',
            marginLeft: -drawerWidth}} />
            <br/><br/><br/><br/>
            <Button 
            onClick={this.openClsModal}
            variant='contained'
            color='inherit'
            > Add Unit
            </Button> 
            <ClsModal
            ctrlClsModal={this.state.modalOpener}
            closeClsModal={this.closeClsModal}
            takeUnitNm={this.takeUnitNm}
            />
            {this.state.units.map((units)=>
                <li key={units}>{units}</li>)
            } 
            <Button
            variant='contained' 
            stle={{backgroundColor:'#349D63'}}
            onClick={ this.signingOut}
            > log out
            </Button>
            </main>
            </div>
        )
    }
};
export default TakeAtt; 

{/** <Button 
variant='contained' 
color='secondary'
onClick={<ClsModal
    openClsModal={this.openClsModal}
    ctrlClsModal={this.state.modalOpener}
    closeClsModal={this.closeClsModal}
    takeUnitNm={this.takeUnitNm}
    />}>
Add Unit
</Button>*/}