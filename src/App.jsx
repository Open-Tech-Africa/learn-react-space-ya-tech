import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [movieCharacter, setMovieCharacter] = useState('avengers');
	const API_KEY = import.meta.env.VITE_API_KEY;
	console.log(API_KEY);

	/* Shape of data  
  {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}  
  */

	useEffect(() => {
		const fetchMovies = async (title) => {
			const data = await fetch(`${API_KEY}&s=${title}`);
			const movies = await data.json();
			setMovies(movies.Search);
		};

		fetchMovies(movieCharacter);
	}, [movieCharacter]);

	return (
		<>
			<NavBar setMovieCharacter={setMovieCharacter} />

			{movies.length > 0 ? (
				<main className="container movies grid">
					{movies?.map((movie) => (
						<Movie key={movie.imdbID} {...movie} />
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

const Movie = ({ Title, Year, Poster }) => {
	return (
		<article className="movie slide-in-fwd-center">
			<div className="movie__info flex items-center justify-between">
				<h1 className="movie__title">{Title?.split(':')[0]}</h1>
				<p>{Year}</p>
			</div>
			<div>
				<img
					src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/800'}
					alt={Title}
					className="movie__image"
				/>
			</div>
		</article>
	);
};

export default App;
