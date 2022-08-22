const Movie = ({ title, release_date, backdrop_path }) => {
	const posterURL = `https://image.tmdb.org/t/p/original${backdrop_path}`;

	return (
		<article className="movie slide-in-fwd-center">
			<div className="movie__info flex items-center justify-between">
				<h1 className="movie__title">{title?.split(':')[0]}</h1>
				<p>{release_date.split('-')[0]}</p>
			</div>
			<div>
				<img
					src={posterURL ? posterURL : 'https://via.placeholder.com/800'}
					alt={title}
					className="movie__image"
				/>
			</div>
		</article>
	);
};

export default Movie;
