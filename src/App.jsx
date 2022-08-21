import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const App = () => {
	const [movies, setMovies] = useState([]);
	const API_KEY = `http://www.omdbapi.com/?apikey=df4b29cc&`;

	/* Shape of data  
  {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}  
  */

	console.log(movies[0]);

	useEffect(() => {
		const fetchMovies = async (title) => {
			const data = await fetch(`${API_KEY}&s=${title}`);
			const movies = await data.json();
			setMovies(movies.Search);
		};

		fetchMovies('superman');
	}, []);
	return (
		<>
			{/* Navigation bar */}
			<NavBar />

			{/* Movies */}
			<main className="container movies grid">
				{movies.map((movie) => (
					<Movie key={movie.imdbID} {...movie} />
				))}
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
};

const Movie = ({ Title, Year, Type, Poster }) => {
	return (
		<article className="movie">
			<div className="movie__info flex items-center justify-between">
				<h1 className="movie__title">{Title?.split(':')[0]}</h1>
				<p>{Year}</p>
			</div>
			<div>
				<img src={Poster} alt={Title} className="movie__image" />
			</div>
			{/* <div className="">
				<p>{Type}</p>
			</div> */}
		</article>
	);
};

export default App;
