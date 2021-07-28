import { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import emailjs from "emailjs-com";
import style from "../styles/ContactUs.module.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonState, setButtonState] = useState(false);
  const sendMessage = (e) => {
    e.preventDefault();
    setButtonState(true);
    emailjs
      .sendForm(
        "gmail",
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setMessage("");
          setButtonState(false);
          alert("Message Sent, I'll get back to you shortly", result.text);
        },
        (error) => {
          console.log(error);
          setButtonState(false);
          alert("An error occured, Plese try again", error.text);
        }
      );
  };
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
            autoComplete="off"
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
            autoComplete="off"
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
          {buttonState && <CircularProgress />}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
