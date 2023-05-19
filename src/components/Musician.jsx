import MusicSection from './MusicSection';
import StyledList from './StyledList';
import Cards from './Cards';

import ritus from '../assets/images/ritus.jpg';
import lospuentes from '../assets/images/lospuentes.jpg';
import tripy from '../assets/images/tripy.jpg';
import partefugaz from '../assets/images/partefugaz.jpg';
import paraisoroto from '../assets/images/paraisoroto.jpg';
import dubs from '../assets/images/dubs.jpg';
import bass from '../assets/images/bass.png';

export default function Musician() {
  // Parte de 'Participaciones'
  const participacionesData = [
    {
      info: 'Ritus Sequoia (2018)',
      src: ritus,
      url: 'https://youtu.be/4cbX4XRv9oo',
    },
    {
      info: 'Los Puentes - Abres (2019)',
      src: lospuentes,
      url: 'https://youtu.be/jUJgLLlJJl0',
    },
    {
      info: 'Tripy Dubs - Tripy (2019)',
      src: tripy,
      url: 'https://youtu.be/GOT02ZbKTBI',
    },
    {
      info: 'Banda Especia - Parte Fugaz (2020)',
      src: partefugaz,
      url: 'https://youtu.be/SK4D5FfEnz0',
    },
    {
      info: 'Banda Especia - Paraíso Roto (2020)',
      src: paraisoroto,
      url: 'https://youtu.be/0C-RiV-4iDM',
    },
    {
      info: 'Tripy Dubs - Dubs (2023)',
      src: dubs,
      url: 'https://youtube.com/playlist?list=OLAK5uy_ns0hV2nozB_DpRZSZBgJUDQFi1MxRT-e4',
    },
  ];

  // (clases que se le envían al componente Card)
  const cardStyles = {
    figureStyle:
      'my-6 max-w-[200px] z-50 sm:max-w-[45%] justify-between md:max-w-[256px] bg-[color:var(--black-hover-color)] hover:scale-125  hover:bg-[color:var(--black-color)] hover:text-[color:var(--secondary-color)] transition duration-300 hover:z-[60]',
    imgStyle: 'p-2 rounded-2xl',
    figcaptionStyle: 'text-xl my-1 text-center',
  };

  const participaciones = (
    <>
      <h4 className="mx-5 mt-4 md:mt-8 md:mx-10 md:tracking-wide lg:my-8 lg:text-xl">Como bajista:</h4>
      <div className="flex flex-wrap justify-center md:justify-evenly lg:m-auto lg:max-w-5xl">
        {participacionesData.map(({ info, src, url }) => (
          <Cards
            key={info}
            info={info}
            src={src}
            cardStyles={cardStyles}
            link={{
              classList: 'text-sm my-1 text-[color:var(--white-color)] hover:text-[color:var(--secondary-hover-color)]',
              text: 'Escuchar disco',
              url,
            }}
          />
        ))}
      </div>
    </>
  );

  // Parte de 'Trabajos'
  const trabajosData = [
    'Prof. particular de instrumento - 2017/act.',
    'Músico sesionista: grabaciones y conciertos - 2018/act.',
  ];

  const trabajos = (
    <StyledList listStyle="m-auto mt-4 md:mt-6 w-3/4" itemStyle="my-3 md:my-5 md:text-lg" listContent={trabajosData} />
  );

  // Parte de 'Estudios'
  const estudiosData = [
    'Estudiante de bajo eléctrico - 2008/act.',
    'Prof. en música or. música popular - 2013/2021 - FdA - UNLP',
    'Lic. en música or. música popular - 2013/2021 - FdA - UNLP',
  ];

  const estudios = (
    <StyledList listStyle="m-auto mt-4 md:mt-6 w-3/4" itemStyle="my-3 md:my-5 md:text-lg" listContent={estudiosData} />
  );

  return (
    <>
      <img
        src={bass}
        className="hidden fixed bottom-0 right-0 lg:block opacity-30 brightness-0 hover:brightness-50 transition duration-300"
        alt="bass profile pic"
      />
      <div className="w-3/4 m-auto my-3">
        <MusicSection title="Participaciones" innerContent={participaciones} />
        <MusicSection title="Trabajos" innerContent={trabajos} />
        <MusicSection title="Estudios" innerContent={estudios} />
      </div>
    </>
  );
}
