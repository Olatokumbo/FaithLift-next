import { Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.about}>
      <div className={style.aboutContent}>
        <Fade top duration={800} distance="30px" cascade>
        <div className={style.aboutContentLeft}>
        <Typography className={style.title}>
        Our Mission & Vision
        </Typography>
        <Fade top duration={800} distance="30px" cascade>
        <ul>
          <li><Typography>To transform the movie industry with sound moral values production.</Typography></li>
          <li><Typography>To create platform for young talented youth to discover themselves and fulfill their potential.</Typography></li>
          <li><Typography>To correct the media errors that is eating into our young people today.</Typography></li>
          <li><Typography>To create wealth of opportunity for young people.</Typography></li>
          <li><Typography>To produce inspiring films that will challenge and also encourage young people to discover who they are.</Typography></li>
        </ul>
        </Fade>
        </div>
        </Fade>
        <div className={style.aboutContentRight}>
            <img className={style.ceo} src="/images/vision.svg" alt="main"/>
        </div>
      </div>
      <div className={style.fadeBottom}></div>
    </div>
  );
};

export default About;
