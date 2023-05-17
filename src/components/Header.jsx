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
      onClick={id === 'musician' ? handleCurrentPage : handleHamburgerClick}
    >
      {title}
    </a>
  ));

  return (
    <>
      <header className="px-6 py-4 md:px-12 md:py-10 lg:px-16 lg:py-14 flex justify-between items-center">
        <span className="text-4xl h-max lg:text-5xl">
          <b>FO</b>
          <b className="text-[color:var(--secondary-color)]">.</b>
        </span>
        <nav className="hidden md:flex md:gap-4 lg:gap-6">{navLinks}</nav>
        <Hamburger state={hamburgerState} onClick={handleHamburgerClick} />
      </header>
      <nav
        className={`${
          hamburgerState ? 'max-h-56' : ''
        } flex overflow-hidden transition-[max-height] duration-300 max-h-0 flex-col bg-[color:var(--black-color)] md:hidden`}
      >
        {navLinks}
      </nav>
    </>
  );
}

Header.propTypes = {
  handleCurrentPage: PropTypes.func.isRequired,
};
