import tmdb from '../../assets/tmdb.svg';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="movie__footer">
      <div className="container flex justify-between">
        <p>Copyright {new Date().getFullYear()}</p>
        <a href="https://www.themoviedb.org/" target="_blank">
          <img src={tmdb} alt="" width={45} />
        </a>
        <p className="movie__footer-developer">
          GitHub:{' '}
          <a href="https://github.com/mamba-dev-KE" target="_blank">
            mamba-dev-KE
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
