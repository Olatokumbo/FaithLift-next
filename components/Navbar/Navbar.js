import { useState, useEffect } from "react";
import { Typography, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Link from "next/link";
// import Logo from "../../assets/images/logo.png";
import style from "./Navbar.module.css";

const Navbar = () => {
  const [buttonState, setButtonState] = useState(false);
  const [backgroundState, setBackground] = useState(false);
  const handleClose = () => {
    setButtonState(false);
  };
  useEffect(()=>{
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

    return ()=>{
      window.removeEventListener("resize", changeMenu);
      window.removeEventListener("scroll", changeBackground);
    }
  })
  return (
    <div className={!backgroundState ? style.navbar : style.navbarRolled}>
      <div className={style.header}>
        <Link href="/">
          <img className={style.logo} src="/images/logo.png" alt="logo"/>
        </Link>
        <div
          className={buttonState ? style.change : style.hamburger}
          onClick={() => setButtonState((prevState) => !prevState)}
        >
          <span className={style.rectangle1}></span>
          <span className={style.rectangle2}></span>
          <span className={style.rectangle3}></span>
        </div>
      </div>
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
      <ul className={style.socials}>
        <li>
          <IconButton>
            <InstagramIcon className={style.icon} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <TwitterIcon className={style.icon} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <FacebookIcon className={style.icon} />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <YouTubeIcon className={style.icon} />
          </IconButton>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
