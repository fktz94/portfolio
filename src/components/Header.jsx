import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import navData from '../navData';
import Hamburger from './Hamburger';

export default function Header({ currentPage, handleCurrentPage }) {
  const [hamburgerState, setHamburgerState] = useState(false);
  const isMusicSection = currentPage === 'musician';

  // useEffect para que cada vez que se vuelva a entrar a la página hamburgerState sea false
  useEffect(() => () => setHamburgerState(false), []);

  const handleHamburgerClick = () => {
    setHamburgerState((oldHamburgerState) => !oldHamburgerState);
  };

  // resize para activar en conjunto el navbar collapse (si es la media query indicada funciona, si no no)
  const [windowWidth, detectWidth] = useState(window.innerWidth);
  const getInnerWidth = () => {
    detectWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', getInnerWidth);
    return () => {
      window.removeEventListener('resize', getInnerWidth);
    };
  }, [windowWidth]);

  const navBarCollapse = windowWidth < 768;

  const navLinks = navData.map(({ title, id }) => (
    <a
      key={title}
      className="py-2 text-center tracking-wider hover:bg-[color:var(--black-hover-color)] md:hover:bg-transparent md:border-b-2 transition-colors md:pb-1 md:border-transparent md:hover:border-[color:var(--secondary-hover-color)] hover:text-[color:var(--secondary-hover-color)] md:hover:text-[color:var(--white-hover-color)] md:tracking-widest md:text-sm lg:text-base"
      href={`#${id}`}
      onClick={() => {
        handleHamburgerClick();
        if (id === 'musician') handleCurrentPage('musician');
        if (id !== 'musician') handleCurrentPage('home');
      }}
    >
      {title}
    </a>
  ));

  return (
    <>
      <header
        className={`sticky top-0 z-[999] bg-[color:var(--grey-color)] px-6 py-3 md:px-12 lg:px-16 flex justify-between items-center ${
          isMusicSection ? 'lg:my-0' : 'my-3 md:my-10 lg:my-14'
        }`}
      >
        <a className="text-4xl h-max lg:text-5xl" href="/">
          <b>FO</b>
          <b className="text-[color:var(--secondary-color)]">.</b>
        </a>
        <nav className="hidden md:flex md:gap-4 lg:gap-6">{navLinks}</nav>
        <Hamburger state={hamburgerState} onClick={handleHamburgerClick} />
      </header>
      <nav
        className={`${
          hamburgerState && navBarCollapse ? 'max-h-56' : ''
        } flex z-[999] sticky top-[56px] overflow-hidden transition-[max-height] duration-300 max-h-0 flex-col bg-[color:var(--black-color)] md:hidden`}
      >
        {navLinks}
      </nav>
    </>
  );
}

Header.propTypes = {
  currentPage: PropTypes.string,
  handleCurrentPage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  currentPage: '',
};
