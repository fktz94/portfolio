import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import navData from '../navData';
import Hamburger from './Hamburger';

export default function Header({ handleCurrentPage }) {
  const [hamburgerState, setHamburgerState] = useState(false);

  // useEffect para que cada vez que se vuelva a entrar a la página hamburgerState sea false
  useEffect(() => () => setHamburgerState(false), []);

  const handleHamburgerClick = () => {
    setHamburgerState((oldHamburgerState) => !oldHamburgerState);
  };

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
      <header className="sticky top-0 z-[999] bg-[color:var(--grey-color)] px-6 my-3 py-2 md:px-12 md:my-10 lg:px-16 lg:my-14 flex justify-between items-center">
        <a className="text-4xl h-max lg:text-5xl" href="/">
          <b>FO</b>
          <b className="text-[color:var(--secondary-color)]">.</b>
        </a>
        <nav className="hidden md:flex md:gap-4 lg:gap-6">{navLinks}</nav>
        <Hamburger state={hamburgerState} onClick={handleHamburgerClick} />
      </header>
      <nav
        className={`${
          hamburgerState ? 'max-h-56' : ''
        } flex z-[999] sticky top-[56px] overflow-hidden transition-[max-height] duration-300 max-h-0 flex-col bg-[color:var(--black-color)] md:hidden`}
      >
        {navLinks}
      </nav>
    </>
  );
}

Header.propTypes = {
  handleCurrentPage: PropTypes.func.isRequired,
};
