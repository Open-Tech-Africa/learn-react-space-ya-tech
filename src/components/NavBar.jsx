const NavBar = ({ setMovieCharacter }) => {
	return (
		<header className="movie__header flex items-center justify-between">
			<div className="container flex items-center justify-between">
				<div className="movie__logo">
					<p>Unanikazia Mupi Why?</p>
				</div>
				<nav className="movie__nav flex items-center">
					<li onClick={() => setMovieCharacter('avengers')}>Avengers</li>
					<li onClick={() => setMovieCharacter('superman')}>Superman</li>
					<li onClick={() => setMovieCharacter('batman')}>Batman</li>
					<li onClick={() => setMovieCharacter('spiderman')}>Spiderman</li>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
