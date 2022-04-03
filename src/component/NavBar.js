import * as React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import image from "../tools/img06.png";
const useStayles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down('sm')]:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'flex-start'

    },
    [theme.breakpoints.down('xl')]:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-between'

    },
  
  },

  buttons: {
    ...theme.myButton,
    display: "flex",
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]:{
      display:'flex',
      alignSelf:'left',
      marginLeft:theme.spacing(0),
      fontSize:'8px',
      minWidth:'42px',
      maxWidth:'50px',
      
     },
     
     [theme.breakpoints.down('md')]:{
      display:'flex',
      alignSelf:'left',
      marginLeft:theme.spacing(1),
      fontSize:'10px',
      minWidth:'50px',
      maxWidth:'700px',
      
     },
     [theme.breakpoints.up('md')]:{
      display:'flex',
      alignSelf:'left',
      marginLeft:theme.spacing(4),
      fontSize:'15px',
      minWidth:'60px',
      maxWidth:'700px',
      
     },
   
    
  },
  img: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    [theme.breakpoints.down('sm')]:{
     display:'none'
    },
    [theme.breakpoints.up('sm')]:{
      display:'block',
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    },
  },
}));
export default function NavBar() {
  const classes = useStayles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <img className={classes.img} src={image} alt="personal" />
        <div className={classes.buttons}>
          <Button component={NavLink} to="/home" className={classes.buttons}>
            Home
          </Button>
          <Button component={NavLink} to="/skills" className={classes.buttons}>
            Skills
          </Button>
          
          <Button component={NavLink} to="/about" className={classes.buttons}>
            About
          </Button>
          <Button component={NavLink} to="/contact" className={classes.buttons}>
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
