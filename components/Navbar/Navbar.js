import { useState, useEffect } from "react";
import { Typography, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Link from "next/link";
import Fade from "react-reveal/Fade";
// import Logo from "../../assets/images/logo.png";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [buttonState, setButtonState] = useState(false);
  const [backgroundState, setBackground] = useState(false);
  const handleClose = () => {
    setButtonState(false);
  };
  useEffect(() => {
    const changeMenu = () => {
      if (window.innerWidth > 530) {
        setButtonState(false);
      }
    };

    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setBackground(true);
      } else setBackground(false);
    };
    window.addEventListener("resize", changeMenu);
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("resize", changeMenu);
      window.removeEventListener("scroll", changeBackground);
    };
  });
  return (
    <div className={!backgroundState ? style.navbar : style.navbarRolled}>
      <div className={style.header}>
        <Fade top distance="20px" duration={800}>
          <Link href="/">
            <img className={style.logo} src="/images/logo.png" alt="logo" />
          </Link>
        </Fade>
        <div
          className={buttonState ? style.change : style.hamburger}
          onClick={() => setButtonState((prevState) => !prevState)}
        >
          <span className={style.rectangle1}></span>
          <span className={style.rectangle2}></span>
          <span className={style.rectangle3}></span>
        </div>
      </div>
      <Fade top duration={800} distance="20px" cascade>
        <ul className={!buttonState ? style.menu : style.menuVertical}>
          <li>
            <Link href="/" onClick={handleClose}>
              <Typography>Home</Typography>
            </Link>
          </li>
          <li>
            <Link href="/articles" onClick={handleClose}>
              <Typography>Articles</Typography>
            </Link>
          </li>
          <li>
            <Link href="/movies" onClick={handleClose}>
              <Typography>Movies</Typography>
            </Link>
          </li>
          <li>
            <Link href="/contactUs" onClick={handleClose}>
              <Typography>Contact</Typography>
            </Link>
          </li>
        </ul>
      </Fade>
      <Fade top duration={800} distance="20px" cascade>
        <ul className={style.socials}>
          <li>
            <IconButton>
              <YouTubeIcon
                className={style.icon}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCbvSvzeLnUrT9XfYqSWeemQ",
                    "_blank"
                  )
                }
              />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <InstagramIcon
                className={style.icon}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/faithlifttv/",
                    "_blank"
                  )
                }
              />
            </IconButton>
          </li>
          <li>
            {/* <IconButton>
              <TwitterIcon className={style.icon} />
            </IconButton> */}
          </li>
          <li>
            <IconButton>
              <FacebookIcon
                className={style.icon}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/faithliftprod",
                    "_blank"
                  )
                }
              />
            </IconButton>
          </li>
        </ul>
      </Fade>
    </div>
  );
};

export default Navbar;
