import { Button, makeStyles, Typography } from "@material-ui/core";
import mainPhoto from "../tools/img05.gif";
import { useHistory } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';
import MessageIcons from '@material-ui/icons/EmailRounded';

const styleTheme = makeStyles((theme) => ({
  button: {
    ...theme.contactMe,
    marginRight:'10px',
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      fontSize: "10px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "30px",
    },
  },
  text: {
    ...theme.text,
    [theme.breakpoints.down("sm")]: {
      fontSize: "60px",
      marginLeft: "0px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "80px",
    },
  },

  welcome: {
    ...theme.welcomeText,
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      marginLeft: "0px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
  },
  parent: {
    margin: "1rem",
    padding: "1rem",

    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      padding: "auto",
    },
    [theme.breakpoints.up("md")]: {
      margin: "auto",
      padding: "auto",
    },
  },
  lowerText: {
    fontSize: "15px",
    color: "#c6ccca",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "25px",
  },

  child: {
    display: "inline-block",
    margin: "1rem 2rem",
  // border:'1px solid black',
  [theme.breakpoints.up("xl")]: {
    display: "inline-block",
    marginLeft:'150px'
  },
 
  },
  img: {
    marginLeft: "2rem",
    width: "100%",
    height: "300px",
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "inline-block",
      width: "100%",
      height: "200px",
      marginLeft: "3rem",

    },
    [theme.breakpoints.up("lg")]: {
      display: "inline-block",
      width: "100%",
      height: "300px",
      marginLeft: "8rem",
    },
    [theme.breakpoints.up("xl")]: {
      display: "inline-block",
      width: "100%",
      height: "350px",
    },
  },
}));
const MainPage = () => {
  const classes = styleTheme();
  const history = useHistory();

  const navigationHandler = () => {
    history.replace("/contact");
  };
  const gitHubnavigationHandler = () => {
    window.location.href = "https://github.com/Ahmad-SH?tab=repositories"
  };

  return (
    <div className={classes.parent}>
      <div className={classes.child}>
        <Typography className={classes.text} variant="h1">
          Hi,
        </Typography>
        <Typography className={classes.welcome} variant="h2">
          I'm Ahmad,
        </Typography>
        <Typography className={classes.welcome} variant="h3">
          Web Developer.
        </Typography>
        <div className={classes.welcome}>
          <Typography className={classes.lowerText} variant="h6">
            Front End Developer | React.js Enthusiast | JS, HTML, CSS
          </Typography>
          <div className={classes.welcome}>
          <Typography className={classes.lowerText} variant="h6">
           Also, feel free to check my <strong>github</strong> account to view my work
          </Typography>
        </div>
        </div>

        <Button
          onClick={navigationHandler}
          className={classes.button}
          variant="outlined"
           startIcon={<MessageIcons />}
        >
          Get in Touch
        </Button>
        <Button
          onClick={gitHubnavigationHandler}
          className={classes.button}
          variant="outlined"
          startIcon={<GitHubIcon />}
        >
          View Work
        </Button>
      </div>
      <div className={classes.child}>
        <img className={classes.img} src={mainPhoto} alt="" />
      </div>
    </div>
  );
};

export default MainPage;
