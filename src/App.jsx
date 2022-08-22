import { useEffect, useState } from 'react';
import { NavBar, MovieList, Footer } from './components';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieCategory, setMovieCategory] = useState('popular');

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/${movieCategory}?api_key=${API_KEY}`;
  7;

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await fetch(API_URL);
      const movies = await data.json();

      setMovies(movies.results);
    };

    fetchMovies();
  }, [movieCategory]);

  return (
    <>
      <NavBar setMovieCategory={setMovieCategory} />
      <MovieList movies={movies} />
      <Footer />
    </>
  );
};

export default App;
