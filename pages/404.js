import { Typography } from "@material-ui/core"
import style from "../styles/404.module.css";

const Page404 = () =>{
    return(
        <div className={style.page404}>
            <div className={style.header}>
                <Typography className={style.title}>404</Typography>
            </div>
            <div className={style.subHeader}>
                <Typography className={style.subHeaderTitle}>Page Not Found</Typography>
                <Typography className={style.message}>Sorry, it seems that the page you are looking for doesn't exist</Typography>
            </div>
        </div>
    )
}

export default Page404