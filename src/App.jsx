import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import MovieDetails from "./components/MovieDetails";
import moviesData from "./data";

function App() {
  const [movieList, setMovieList] = useState(() => {
    const savedMovies = localStorage.getItem("movies");

    return savedMovies ? JSON.parse(savedMovies) : moviesData;
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movieList));
  }, [movieList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MovieList movieList={movieList} />}
        />

        <Route
          path="/add"
          element={
            <AddMovie
              movieList={movieList}
              setMovieList={setMovieList}
            />
          }
        />

        <Route
          path="/movie/:id"
          element={
            <MovieDetails
              movieList={movieList}
              setMovieList={setMovieList}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;