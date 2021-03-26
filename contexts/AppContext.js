import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [poster, setPoster] = useState({});
  const [articles, setArticles] = useState([]);
  return (
    <AppContext.Provider
      value={{
        moviesList: [movies, setMovies],
        posterMain: [poster, setPoster],
        articlesList: [articles, setArticles],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
