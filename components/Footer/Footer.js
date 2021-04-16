import { Typography, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.contact}>
        <div className={style.contactInfo}>
          <CallIcon />
          <Typography>885-223-337</Typography>
        </div>
        <div className={style.contactInfo}>
          <MailIcon />
          <Typography>faithlift@gmail.com</Typography>
        </div>
        <div className={style.contactInfo}>
          <RoomIcon />
          <Typography>
            Suite 2, RCCG CRM Business Office, Redemption Camp
          </Typography>
        </div>
      </div>
      <div className={style.bottomFooter}>
        <Link href="/">
          <img className={style.logo} src="/images/logo.png" alt="logo" />
        </Link>
        <Fade top duration={800} distance="20px" cascade>
          <div className={style.socials}>
            <IconButton
              // size="small"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCbvSvzeLnUrT9XfYqSWeemQ",
                  "_blank"
                )
              }
            >
              <YouTubeIcon className={style.icon} />
            </IconButton>
            <IconButton
              // size="small"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/pastorjfodesola",
                  "_blank"
                )
              }
            >
              <InstagramIcon className={style.icon} />
            </IconButton>
            <IconButton
              // size="small"
              onClick={() =>
                window.open("https://www.facebook.com/JFOdesola", "_blank")
              }
            >
              <FacebookIcon className={style.icon} />
            </IconButton>
            <IconButton
              // size="small"
              onClick={() =>
                window.open("https://twitter.com/pastorjfodesola", "_blank")
              }
            >
              <TwitterIcon className={style.icon} />
            </IconButton>
          </div>
        </Fade>
        <Typography className={style.copyRight}>
          © Copyright {new Date().getFullYear()} All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
