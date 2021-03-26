import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [movies, setMovies] = useState(null);
  const [poster, setPoster] = useState(null);
  const [articles, setArticles] = useState(null);
  return (
    <AppContext.Provider
      value={{
        movies: [movies, setMovies],
        poster: [poster, setPoster],
        articles: [articles, setArticles],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
