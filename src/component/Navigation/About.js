import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

import image from "../../tools/programming.jpeg";
const styles = makeStyles((theme) => ({
  text: {
    color: "grey",
    display: "grid",
    gridTemplateColumns: " 1fr 1fr",
    gridGap: "100px",
    textAlign: "left ",

  },
  header: {
    color: "#d4c220",
    marginTop: "10rem",
    fontWeight: "600",
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      width: "100%",
      height: "auto",
  
    },
  },
  textLeft: {
    textAlign: "left",
    display: "inline-block",  
    
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width:'100%',
    },

    marginLeft: "5rem",
  },
  textRigth: {
    marginTop: "10rem",
  },
  welcome: {
    ...theme.welcomeText,
  },
  img: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    marginLeft: "10rem",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const About = () => {
  const classes = styles();
  return (
    <div className={classes.text}>
      <div className={classes.textLeft}>
        <Typography className={classes.header} variant="h2">
          About me
        </Typography>
        <br></br>
        <Typography>
          <p>
            I am an Engineer from <strong>Syria</strong> and my background is
            electrical engineering but i found that my passion is in the
            development field through makeing great web apps so i shift towards
            web development and I want to keep going on.
          </p>
        </Typography>

        <Typography>
          I am well organized, considerate , open minded and a person who
          apreciate time so I like to spend my time effectively
          <br /> a passionate person,competitive and love to learn new things
        </Typography>
        <Typography>
          <p>
            In the up comming 2 years i want to become a professional <br />
            MERN Full stack Engineer
          </p>
        </Typography>
        <Typography>
          <p>In 5 years I want to be envolved In AI</p>
        </Typography>
        <Typography>
          <strong>Languages:</strong>
          <br />
          <strong>Arabic:</strong> Native "Mother tongue"
          <br />
          <strong>English:</strong> Business Level
          <br />
          <strong>Japanese:</strong> Daily Conversation "JLPT N3"
          <br />
        </Typography>
      </div>
      <div className={classes.textRigth}>
        <img className={classes.img} src={image} alt="" />
      </div>
    </div>
  );
};

export default About;
