const NavBar = () => {
	return (
		<header className="movie__header flex items-center justify-between">
			<div className="container flex items-center justify-between">
				<div className="movie__logo">
					<p>Unanikazia Mupi Why?</p>
				</div>
				<nav className="movie__nav flex items-center">
					<li>Superman</li>
					<li>Batman</li>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
