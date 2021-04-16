import { Typography, Button } from "@material-ui/core";
import style from "./ArticleCard.module.css";
import moment from "moment";
import { truncate } from "../../utils/truncate";
const ArticleCard = ({ data }) => {
  return (
    <div className={style.articleCard}>
      <div className={style.banner}>
        <img src={data.poster} alt="Poster" />
      </div>
      <div className={style.articleContent}>
        <div>
          <Typography className={style.title}>{data.title}</Typography>
          <Typography className={style.articleMessage}>{truncate(data.message[0])}</Typography>
        </div>
        <div className={style.articleFooter}>
          <Typography className={style.publishedDate}>
            Published Date: {moment(Date(data?.publishedDate.seconds)).format("MM/DD/YYYY")}
          </Typography>
          {/* <Button className={style.readBtn} variant="contained">
            ReadMore
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
