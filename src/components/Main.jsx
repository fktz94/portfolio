import { useEffect, useState } from 'react';
import socialMediaData from '../socialMediaData';
import Button from './Button';

import portfolioMain from '../assets/images/portfolio-main.png';
import react from '../assets/images/react.svg';

export default function Main() {
  // agregar padding al scrollTo para ajustar, debido al cambio de tamaño del header
  const [windowSize, detectSize] = useState(window.innerWidth);
  const getSize = () => {
    detectSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', getSize);
    return () => {
      window.removeEventListener('resize', getSize);
    };
  }, [windowSize]);

  const paddingAdded = windowSize > 1024 ? 64 : 56;

  const goToSection = (section) => {
    const proyectsOffsetY = document.getElementById(section).offsetTop;
    window.scrollTo(0, proyectsOffsetY - paddingAdded);
  };

  const rightArticleData = [
    'I believe in going further, in pushing limits beyond.',
    'Crafting dreams through technology, forging a limitless future.',
  ];

  return (
    <main
      className="relative px-6 py-4 sm:pb-8 md:px-12 md:py-14 md:mb-10 flex justify-center overflow-hidden"
      id="main"
      data-scroll
    >
      <article className="w-full max-w-[250px] flex-col justify-between sm:max-w-[350px] md:min-w-[250px] md:max-w-[350px] md:flex lg:max-w-[410px]">
        <h1 className="text-4xl font-medium tracking-wide md:text-5xl md:font-semibold md:tracking-tight ">
          Facundo
          <br />
          Ortiz<b className="text-[color:var(--secondary-color)]">.</b>
        </h1>
        <hr className="mt-8 mb-4 w-10 border border-solid lg:mt-16 lg:mb-8 lg:w-14 border-[color:var(--secondary-color)]" />
        <ul>
          {socialMediaData.map(({ title, to }) => (
            <li key={title} className="pt-1 lg:pt-3">
              <a href={to} className="hover:text-[color:var(--secondary-color)]" target="_blank" rel="noreferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>
        <Button
          buttonStyle="my-4 px-4 py-3 text-xs font-semibold tracking-widest max-w-fit lg:mt-10"
          text="CONTACT"
          handleClick={() => goToSection('contact')}
        />
      </article>
      <article className="relative w-full h-auto max-w-[180px] md:max-w-[220px] lg:max-w-[300px]">
        <div id="main-bg" className="absolute h-32 w-32 rounded-full bg-[color:var(--black-hover-color)]" />
        <img id="main-img" className="absolute brightness-150" src={portfolioMain} alt="foto de perfil" />
      </article>
      <article className="hidden items-center md:flex flex-col justify-between md:max-w-[250px] z-50">
        <h2 className="text-xl text-center font-light lg:text-2xl lg:tracking-wider text-[color:var(--secondary-hover-color)]">
          Frontend Web Developer
        </h2>
        <ul>
          {rightArticleData.map((item) => (
            <li key={item} className="text-sm tracking-widest my-5 leading-7 lg:text-base">
              {item}
            </li>
          ))}
        </ul>
        <Button
          text="PROJECTS"
          buttonStyle="my-4 px-4 py-3 text-xs font-semibold tracking-widest max-w-fit"
          handleClick={() => goToSection('proyects')}
        />
      </article>
      <img
        src={react}
        alt="React Logo"
        className="hidden md:block absolute top-1/2 right-0 h-96 -translate-y-1/2  translate-x-1/2 opacity-10 brightness-0"
      />
    </main>
  );
}
