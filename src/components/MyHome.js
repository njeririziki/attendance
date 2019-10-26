  import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as Icon from 'react-feather';
import { withRouter,Link } from "react-router-dom";
//import Content from '../components/content';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  padding:{
    padding:0
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:'#FFF',
    boxShadow:'none'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:"#000"
  },
  customToolbar:{
    minHeight:48,
    display:'flex',
    flexDirection:'row',    
    justifyContent:'space-between',
    alignItems:'center'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 4px',
    minHeight:48,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    backgroundColor:'#F2F2F2'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    backgroundColor:'#F2F2F2'
  },
}));

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedClass, setselectedClass] = React.useState(0);

  function handleClassClick(event, index) {
    setselectedClass(index);
  }
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.customToolbar}>
          <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <Icon.Menu />
            </IconButton>
            <Typography variant="h6" noWrap style={{color:"#000"}}>
              Class Attendance
            </Typography>
          </div>
          <Button style={{alignSelf:'center'}} variant="text" color="primary" size="small" component={Link} to="/login">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <Icon.ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List style={{ padding: 0 }}>
          {['Class 1', 'Class 2', 'Class 3', 'Class 4','Class 5', 'Class 6', 'Class 7'].map((text, index) => (
            <ListItem 
              button
              selected={selectedClass === index}
              onClick={event => handleClassClick(event, index)}
              key={index}>
              <ListItemText primary={text} />              
              <Divider />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main>
        <div className={classes.drawerHeader} />
        
      </main>
    </div>
  );
}

export default withRouter(Home);