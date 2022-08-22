import { useEffect, useState } from 'react';
import { NavBar, MovieList, Footer } from './components';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [movieCategory, setMovieCategory] = useState('popular');

	const API_KEY = import.meta.env.VITE_API_KEY;
	const API_URL = `https://api.themoviedb.org/3/movie/${movieCategory}?api_key=${API_KEY}`;
	7;

	// {
	//   "adult": false,
	//   "backdrop_path": "/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
	//   "genre_ids": [
	//     28,
	//     878,
	//     53
	//   ],
	//   "id": 766507,
	//   "original_language": "en",
	//   "original_title": "Prey",
	//   "overview": "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
	//   "popularity": 9839.591,
	//   "poster_path": "/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
	//   "release_date": "2022-08-02",
	//   "title": "Prey",
	//   "video": false,
	//   "vote_average": 8.1,
	//   "vote_count": 2894
	// }

	useEffect(() => {
		const fetchMovies = async () => {
			const data = await fetch(API_URL);
			const movies = await data.json();

			setMovies(movies.results);
		};

		fetchMovies();

		// if (activeGenreID === 0) {
		// 	console.log(popularMovies);
		// 	setFilteredMovies(popularMovies);
		// 	return;
		// }

		// const filteredMovies = popularMovies.filter((m) =>
		// 	m.genre_ids.includes(activeGenreID)
		// );

		// setFilteredMovies(filteredMovies);
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
