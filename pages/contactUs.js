import { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import style from "../styles/ContactUs.module.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonState, setButtonState] = useState(false);
  const sendMessage = () =>{
    setButtonState(true);
    axios
      .post("https://faithlift-api.herokuapp.com/mail", {
        name,
        from: email,
        message
      })
      .then(() => {
        alert("Your message has been sent...");
        setName("");
        setEmail("");
        setMessage("");
        setButtonState(false);
      })
      .catch((err) => {
        setButtonState(false);
        alert(err.message);
      });
  }
  return (
    <div className={style.contactUs}>
      <div className={style.contactLeft}></div>
      <div className={style.contactRight}>
        <div className={style.mainContact}>
          <Typography className={style.title}>CONTACT US</Typography>
          <TextField
            className={style.input}
            name="name"
            type="text"
            size="small"
            label="Full Name"
            variant="filled"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <TextField
            className={style.input}
            name="name"
            type="email"
            size="small"
            label="Email address"
            variant="filled"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            variant="filled"
            label="Message"
            className={style.input}
            multiline
            rows="6"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button
            className={style.submitBtn}
            variant="contained"
            color="secondary"
            disabled={!(!!name && !!email && !!message) || buttonState}
            onClick={sendMessage}
            size="large"
          >
            Submit
          </Button>
          {buttonState && <CircularProgress/>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
