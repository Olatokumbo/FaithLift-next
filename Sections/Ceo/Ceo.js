import style from "./Ceo.module.css";
import Image from "next/image";
import { Typography } from "@material-ui/core";

const Ceo = () => {
  return (
    <div className={style.container}>
      <Typography className={style.header}>Founder of FaithLift</Typography>
      <div className={style.main}>
        <div className={style.left}>
          <Image
            className={style.main_photo}
            width={262}
            height={262}
            src="/images/main.jpg"
            alt="profile"
            priority
            placeholder="blur"
          />
        </div>
        <div className={style.right}>
          <Typography className={style.info_text}>
            Johnson Funso Odesola is a distinguished specialist in Divinity
            after many academic forays through over nine local and international
            tertiary institutions where he obtained six PhD's, two masters
            degrees, a postgraduate diploma, three Bachelor's degrees, a Higher
            National Diploma, an Ordinary national diploma, and Diplomas in
            various academic and theological Disciplines.
          </Typography>

          <Typography className={style.info_text}>
            Following over forty meritorious years dedicated service in RCCG,
            Pastor Odesola was recently appointed the Continental Overseer for
            Africa 3 & Middle East. He is also the Assistant General Overseer on
            Admin & personnel and the Pastor In charge (PIC), RCCG Region 1,
            Ebute Metta, Lagos.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
