import { useEffect, useState } from 'react';

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
		<div className="container">
			{movies.map(({ Title, Year, imdbID, Type, Poster }) => (
				<article key={imdbID}>
					<div className="movie__info flex">
						<h1>{Title}</h1>
						<p>{Year}</p>
					</div>
					<img src={Poster} alt={Title} />
				</article>
			))}
		</div>
	);
};

export default App;
