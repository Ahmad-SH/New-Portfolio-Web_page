import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { theme } from "../../MaterialStyling/theme";
import ImgList from "../../tools/ProgrammingIcons";
const styles = makeStyles((theme) => ({
  text: {
    color: "grey",
    display: "grid",
    gridTemplateColumns: " 1fr 1fr",
    gridGap: "100px",
    textAlign: "left ",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginLeft: "0px",
    },
  },
  textLeft: {
    textAlign: "left",
    display: "inline-block",
    marginLeft: "3rem",
  },
  textRigth: {
    marginTop: "10rem",
  },
  welcome: {
    ...theme.welcomeText,
  },
}));
const Skills = () => {
  const classes = styles();
  return (
    <div className={classes.text}>
      <div className={classes.textLeft}>
        <Typography style={{ ...theme.text, marginTop: "5rem" }} variant="h2">
          Skills
        </Typography>
        <br></br>
        <Typography>
          I am Front End developer with some skills in backend develpment (MERN stack).<br/>
          I did an Internship on <strong>Scratch defect detection</strong> in Osaka, Japan for 2 months.
          
        </Typography>
        <Typography>
          <strong>
            Good at: <br />
          </strong>
          HTML, CSS, BootStrap, Sass, JavaScript, jQuery, React JS, Material UI
        </Typography>
        <Typography>
          <strong>
            Moderate at: <br />
          </strong>
          Python, Node.Js, LabelIMG software, OpenCV,SQLite, AJAX,GIT, GitHub,
        </Typography>
        
        <Typography>
          <strong>
            Basic knowledge in IoT: <br />
          </strong>
          I used nodeMCU ESP8266, ESP Wrrom32,  with MicroPython, C++, Linux,Java
          Redux for React JS, MySQL (Sequelize), MongoDB (mongoose), Tensoflow, Keras, YOLO, Numpy, Scikit-Learn, 
        </Typography>
        <Typography>
          <strong>
            Storage :<br />
          </strong>
          FireBase, Google App Engine (GAE)
        </Typography>
        <Typography>
          <strong>
            soft Skills:
            <br />
          </strong>
          Photoshop, WireFraming (Figma)
        </Typography>
        <Typography>
          <strong>
            Communication Medium:
            <br />
          </strong>
          Discord,Zoom, Google classRoom, Google Hangouts
        </Typography>

      </div>
      <div className={classes.textRigth}>
        <ImgList />
      </div>
    </div>
  );
};

export default Skills;
