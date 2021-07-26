import { Typography, Button } from "@material-ui/core";
import style from "./ArticleCard.module.css";
const { format } = require("date-fns");
import { truncate } from "../../utils/truncate";
const ArticleCard = ({ data }) => {
  return (
    <div className={style.articleCard}>
      <div className={style.banner}>
        <img src={`https:${data.fields.poster.fields.file.url}`} alt="Poster" />
      </div>
      <div className={style.articleContent}>
        <div>
          <Typography className={style.title}>{data.fields.title}</Typography>
          <Typography className={style.articleMessage}>
            {truncate(data.fields.message.content[0].content[0].value)}
          </Typography>
        </div>
        <div className={style.articleFooter}>
          <Typography className={style.publishedDate}>
            Published Date:{" "}
            {format(new Date(data.fields.publishedDate), "MMMM dd, yyyy")}
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
