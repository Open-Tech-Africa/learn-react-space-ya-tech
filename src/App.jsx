import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import { Movie, NavBar } from './components';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [movieCharacter, setMovieCharacter] = useState('avengers');
	const API_KEY = import.meta.env.VITE_API_KEY;

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

	console.log(movies);

	useEffect(() => {
		const fetchMovies = async (title) => {
			const data = await fetch(`${API_KEY}&s=${title}`);
			const movies = await data.json();
			setMovies(movies.results);
		};

		fetchMovies(movieCharacter);
	}, [movieCharacter]);

	return (
		<>
			<NavBar setMovieCharacter={setMovieCharacter} />

			{movies.length > 0 ? (
				<main className="container movies grid">
					{movies?.map((movie) => (
						<Movie key={movie.id} {...movie} />
					))}
				</main>
			) : (
				<main className="container movies grid justify-center">
					<h2 className="movies__not-found">Movies not found</h2>
				</main>
			)}

			<Footer />
		</>
	);
};

export default App;
