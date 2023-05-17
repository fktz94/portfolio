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
    'Disciplina de la constancia',
    'Curioso y obstinado',
    'Aprendiz autodidacta',
    'Español nativo. Inglés y francés fluido',
    'Prolijo y ordenado',
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
        text={!verMasEstudios ? 'Ver otros estudios académicos...' : 'Cerrar'}
        handleClick={handleClickVerMasEstudios}
      />

      {verMasEstudios && (
        <>
          <div className="my-2 sm:my-6 flex flex-row max-w-[350px] sm:max-w-[400px]">
            <article className="flex flex-col items-center justify-center">
              <img src={unlp} className="w-2/5 my-2" alt="Logo FdA" />
              <p className="text-center">Licenciatura en Música</p>
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
              <p className="text-center">Profesorado en Música</p>
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
            text="Ver apartado musical"
            buttonStyle="mt-2 px-2 sm:px-4 py-1 text-xs tracking-wider"
            handleClick={handleCurrentPage}
          />
        </>
      )}
    </>
  );

  return <Section id="about-me" title="Sobre mi" innerContent={innerContent} />;
}

AboutMe.propTypes = {
  handleCurrentPage: PropTypes.func.isRequired,
};
