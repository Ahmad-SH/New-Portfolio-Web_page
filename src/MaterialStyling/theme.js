import { createTheme } from "@material-ui/core";


export const theme = createTheme({
  myButton: {
    backgroundColor: "inherit",
    color: "white",

  },
  contactMe: {
    color: "white",
    border: "none",
    backgroundColor: "#48cfaa",
    marginTop:'2rem',
    marginLeft:'3%'
  },
  text:{
      color:"#d4c220",
     marginTop:'10rem',
     fontWeight:'600',
     marginLeft:'3rem'
  },
  welcomeText:{
      color:"#48cfaa",
      fontWeight:'600',
      marginLeft:'1rem'
  },
  form:{
    marginTop:'10rem',
    textAlign:'center',
   
  }
});
