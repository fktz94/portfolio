import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import Button from './Button';
import StyledList from './StyledList';
import unlp from '../assets/images/unlp.png';

export default function AboutMe({ handleCurrentPage }) {
  const [verMasEstudios, setVerMasEstudios] = useState(false);

  const handleClickVerMasEstudios = () => setVerMasEstudios((oldVerMasEstudios) => !oldVerMasEstudios);

  useEffect(() => setVerMasEstudios(false), []);

  const aboutMeList = [
    'Frontend React Developer Jr.',
    'Discipline of perseverance',
    'Curious and dedicated',
    'Self-taught learner',
    'Native Spanish speaker',
    'Fluent in English and French',
    'Neat and organized',
  ];

  const innerContent = (
    <>
      <StyledList
        listStyle="ml-6 my-3 sm:my-5 md:my-8"
        itemStyle="my-1 sm:my-2 sm:text-lg md:my-5"
        listContent={aboutMeList}
      />

      <Button
        buttonStyle="my-2 px-2 w-full max-w-[300px] sm:max-w-[350px] py-1 text-sm tracking-wider"
        text={!verMasEstudios ? 'Other Academics Studies' : 'Close'}
        handleClick={handleClickVerMasEstudios}
      />

      {verMasEstudios && (
        <>
          <div className="my-2 sm:my-6 flex flex-row max-w-[350px] sm:max-w-[400px]">
            <article className="flex flex-col items-center justify-center">
              <img src={unlp} className="w-2/5 my-2" alt="Logo FdA" />
              <p className="text-center">Bachelor&#39;s Degree in Music</p>
              <p className="text-xs my-1 text-[color:var(--secondary-color)]">2013 - 2021</p>
              <a
                className="hover:text-[color:var(--secondary-color)]"
                href="https://fba.unlp.edu.ar/"
                target="_blank"
                rel="noreferrer"
              >
                UNLP - FdA
              </a>
            </article>
            <article className="flex flex-col items-center justify-center">
              <img src={unlp} className="w-2/5 my-2" alt="Logo FdA" />
              <p className="text-center">Teacher Certification in Music</p>
              <p className="text-xs my-1 text-[color:var(--secondary-color)]">2013 - 2021</p>
              <a
                className="hover:text-[color:var(--secondary-color)]"
                href="https://fba.unlp.edu.ar/"
                target="_blank"
                rel="noreferrer"
              >
                UNLP - FdA
              </a>
            </article>
          </div>
          <Button
            text="See Music Section"
            buttonStyle="mt-2 px-2 sm:px-4 py-1 text-xs tracking-wider"
            handleClick={handleCurrentPage}
          />
        </>
      )}
    </>
  );

  return <Section id="about-me" title="About Me" innerContent={innerContent} />;
}

AboutMe.propTypes = {
  handleCurrentPage: PropTypes.func.isRequired,
};
