import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import useInput from "../hooks/user-input";
import { send } from "emailjs-com";
const styles = makeStyles((theme) => ({
  form: {
    ...theme.form,
  },
  formMain:{
    textAlign:'center',
    color:'#d4c220',
    fontWeight:'600',
    fontSize:'50px',
    [theme.breakpoints.down("md")]: {
      fontWeight: "600",
      fontSize: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontWeight: "600",
      fontSize: "20px",
    },
  },
  button: {
    ...theme.contactMe,
  },
  formInput: {
    display: "inline-block",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "70%"
    },
    [theme.breakpoints.between("md",'lg')]: {
      width: "60%"
    },
  },
  textError:{
    color:'#b80d1b',
    fontSize:'15px',
    textAlign:'left'
  }
}));

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ContactForm = () => {
  const [sent, setIsSent] = useState(false);

  const classes = styles();
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: subjectValue,
    isValid: subjectIsValid,
    hasError: subjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubject,
  } = useInput(isNotEmpty);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && emailIsValid && subjectIsValid && messageIsValid) {
    formIsValid = true;
  }

  const data = {
    name: nameValue,
    email: emailValue,
    subject: subjectValue,
    description: messageValue,
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    //store on fire base
    // fetch("https://preject-53394-default-rtdb.firebaseio.com/request.json", {
    //   method: "POST",
    //   headers: { "Content-Type": "application.json" },
    //   body: JSON.stringify(data),
    // }).then((res) => res.json());
    //
    // using emailJs.com
    send("service_55ucbh3", "template_ID", data, "user_BcgEbAixxmkI1RzBKXJQG")
      .then((response) => {
        resetName();
        resetEmail();
        resetMessage();
        resetSubject();
        setIsSent(true);

      })
      .catch((err) => {
        console.log("FAILED . . . ", err);
      });
  };

  useEffect(() => {
    if (sent) {
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
      return () => clearTimeout();
    }
  }, [sent]);
const errorStyle = (nameHasError || emailHasError || subjectHasError || messageHasError)  ? `${classes.textError}`: null;
  return (
    <div className={classes.form}>
      <form className={classes.formInput} onSubmit={submitFormHandler}>
        <p className={classes.formMain}>Contact me</p>
        <div className={classes.textInput}>
          <TextField
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
            fullWidth
            id="outlined-basic"
            label="Name"
            variant="outlined"
            margin="dense"
          />
          {nameHasError && <p className={errorStyle}>please enter a name.</p>}
          <TextField
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            margin="dense"
          />
          {emailHasError && <p className={errorStyle}>please enter a valid email</p>}
          <TextField
            onChange={subjectChangeHandler}
            onBlur={subjectBlurHandler}
            value={subjectValue}
            fullWidth
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            margin="dense"
          />
          {subjectHasError && <p className={errorStyle}>please enter a subject</p>}
          <TextField
            onBlur={messageBlurHandler}
            onChange={messageChangeHandler}
            value={messageValue}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            fullWidth
            margin="dense"
          />
          {messageHasError && <p className={errorStyle}>please fill the message form</p>}
        </div>
        {sent && <p>Message sent, Thank you fro your inquery!</p>}
        <Button
          type="submit"
          variant="outlined"
          className={classes.button}
          style={{ width: "30%" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
