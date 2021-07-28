import { Typography, Button } from "@material-ui/core";
import style from "../../styles/MovieInfo.module.css";
import { createClient } from "contentful";
import { format } from "date-fns";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const MovieInfo = ({ movie }) => {
  return (
    <div className={style.movieInfo}>
      <div className={style.banner}>
        <img
          className={style.bannerImage}
          src={`https:${movie.fields.coverPhoto.fields.file.url}`}
          alt="banner"
        />
        <div className={style.fadeBottom}></div>
      </div>
      <div className={style.movieContent}>
        <img
          className={style.posterImage}
          src={`https:${movie.fields.poster.fields.file.url}`}
          alt="poster"
        />
        <div className={style.movieDetails}>
          <div className={style.movieDetailsContainer}>
            <div className={style.movieDetailsLeft}>
              {/* <Button
                className={style.ytBtn}
                variant="contained"
                size="large"
                onClick={() => window.open(`${movie.youtubeUrl}`, "_blank")}
              >
                Watch on YouTube
              </Button> */}
              <Typography className={style.movieTitle}>
                {movie.fields.title}
              </Typography>
              <div className={style.movieTime}>
                <Typography className={style.movieDate}>
                  {format(new Date(movie.fields.releaseDate), "MMMM yyyy")}
                </Typography>
                {/* <Typography>{`${movie?.duration?.hours}hr ${movie?.duration?.minutes}mins`}</Typography> */}
              </div>
              <Typography className={style.movieDescription}>
                {movie.fields.description}
              </Typography>
            </div>
            <div className={style.movieDetailsRight}>
              <div className={style.movieStaff}>
                <Typography className={style.staffTitle}>Writer:</Typography>
                <Typography className={style.staffName}>
                  {movie.fields.writer}
                </Typography>
              </div>
              <div className={style.movieStaff}>
                <Typography className={style.staffTitle}>Producer:</Typography>
                <Typography className={style.staffName}>
                  {movie.fields.producer}
                </Typography>
              </div>
              {/* <div className={style.movieStaff}>
                <Typography className={style.staffTitle}>Cast:</Typography>
                <Typography className={style.staffName}>
                  {movie?.casts?.map((castMember) => `${castMember}, `)}
                </Typography>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={style.recommendation}>
        {/* <Typography className={style.recommendHeader}>
          Similar Movies
        </Typography>
        <div className={style.similarMoviesList}>
          <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
          <Typography variant="h5" style={{ color: "white", margin: "5rem" }}>
            Coming Soon...
          </Typography>
        </div> */}
      </div>
    </div>
  );
};

export default MovieInfo;

export async function getStaticPaths() {
  const res = await client.getEntries({
    content_type: "faithLift",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "faithLift",
    "fields.slug": params.slug,
  });

  if (items.length < 1) {
    return {
      notFound: true,
    };
  }
  return {
    props: { movie: items[0] },
    revalidate: 10,
  };
};
