import { Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Flip from 'react-reveal/Flip';
import style from "./Info.module.css";
const Info = () => {
  return (
    <div className={style.info}>
      <img className={style.bg} src="/images/bg.jpg" alt="bg" />
      <div className={style.mainContent}>
        <Fade top duration={800} distance="30px" cascade>
        <div className={style.contentLeft}>
          <Typography className={style.header}>
            About Pisteuo Faith-Lift Productions
          </Typography>
          <Typography component="p" className={style.text}>
            Pisteuo FaithLift Productions is a film production outfit, it was
            officially established in 2013 with its first project titled
            “Incurable Wounds” the project focused on correcting the menace of
            unforgiveness in our society.
          </Typography>
          <Typography component="p" className={style.text}>
            We are also into the business of script written, film production,
            film marketing and distribution, mentoring the young talented youth
            in film making, job creation and also capacity building for young
            people.
          </Typography>
          <Typography component="p" className={style.text}>
            Presently FaithLift as employed the service of professionals to
            carry out her productions from script to screen, marketing and
            distributions etc in a way creating job opportunities for our young
            people. We also have social media platforms as a means of reaching
            out to young people in and outside the country.
          </Typography>
        </div>
        </Fade>
       <Flip top duration={800} cascade>
       <div className={style.contentRight}>
          <img className={style.image} src="/images/image.png" alt="placeholder"  />
          <img className={style.image} src="/images/about2.jpg" alt="placeholder" />
          <img className={style.image} src="/images/about3.jpg" alt="placeholder" />
          <img className={style.image} src="/images/media.jpeg" alt="placeholder" />
        </div>
       </Flip>
      </div>
    </div>
  );
};

export default Info;
