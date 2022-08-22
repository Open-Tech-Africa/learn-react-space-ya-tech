import { Movie } from '../components';

const MovieList = ({ movies }) => {
	return (
		<div>
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
		</div>
	);
};

export default MovieList;
