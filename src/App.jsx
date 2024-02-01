import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await res.json();
      setMovieList(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MovieList movieList={movieList} />} />
          <Route
            path="/movie-details/:id"
            element={<MovieDetails movieList={movieList} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
