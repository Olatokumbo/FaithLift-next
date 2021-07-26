import { Typography, Button } from "@material-ui/core";
import Link from "next/link";
import { createClient } from "contentful";
import style from "../../styles/Movies.module.css";

const Movies = ({ movies, cover }) => {
  return (
    <div className={style.movies}>
      <div className={style.moviePoster}>
        <div className={style.posterContent}>
          <Typography className={style.posterTitle}>
            {cover.fields.title}
          </Typography>
          <Typography className={style.posterSubtitle}>
            {cover.fields.subtitle}
          </Typography>
          {/* <Button
            className={style.ytBtn}
            variant="contained"
            onClick={() => window.open(`${poster?.youtubeUrl}`, "_blank")}
          >
            Watch on YouTube
          </Button> */}
        </div>

        <img
          src={`https:${cover.fields.coverPhoto.fields.file.url}`}
          alt="poster"
        />
        <div className={style.fadeBottom}></div>
      </div>
      <div className={style.movieListContainer}>
        <div className={style.movieList}>
          <Typography className={style.listHeader}>OUR FILMS</Typography>
          <div className={style.posterList}>
            {movies?.map((movie) => (
              <Link key={movie.id} href={`/movies/${movie.fields.slug}`}>
                <img
                  className={style.poster}
                  src={`https:${movie.fields.poster.fields.file.url}`}
                  alt={movie.title}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const response1 = await client.getEntries({
    content_type: "faithLift",
    order: "-sys.createdAt",
  });

  const response2 = await client.getEntries({
    content_type: "cover",
    order: "-sys.createdAt",
  });
  return {
    props: {
      movies: response1.items,
      cover: response2.items[0],
    },
    revalidate: 1,
  };
};
