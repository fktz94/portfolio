import { useEffect, useState } from 'react';
import Section from './Section';
import Cards from './Cards';
import Button from './Button';
import proyectData from '../proyectData';

export default function Proyect() {
  // detectWidth para determinar la cantidad de proyectos que se van a inicializar y de a cuantos se van a ir agregando
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

  // Cantidad de proyectos a renderizar dependiendo de la mediaquery
  const proyects = windowWidth < 640 ? 3 : 4;

  // useState para lso proyectos que se renderizan
  const [showedProyects, setShowedProyects] = useState(proyects);

  // Botón 'Ver Más' muestra 3 (o 4) proyectos más por cada click. Si no hay más, desaparece
  const handleShowedProyects = () => {
    setShowedProyects((oldShowedProyects) => oldShowedProyects + proyects);
  };

  // Botón 'Ver Menos' para volver a los 3 primeros proyectos que se muestran -> MOBILE
  const removeShowedProyects = () => {
    const proyectsOffsetY = document.getElementById('proyects').offsetTop;
    window.scrollTo(0, proyectsOffsetY);
    setShowedProyects(proyects);
  };

  // useEffect para reiniciar el contador cuando salga de la página
  useEffect(() => setShowedProyects(proyects), [proyects]);

  // Clases que se le envían al componente Card
  const cardStyles = {
    figureStyle: 'my-4 max-w-[400px] sm:w-[47%] bg-[color:var(--grey-color)]',
    imgStyle: 'p-2 rounded-2xl',
    figcaptionStyle: 'my-1 text-xl text-center',
  };

  const innerContent = (
    <>
      <div className="flex w-[90%] flex-col justify-center items-center my-5 sm:flex-row sm:flex-wrap sm:justify-between md:max-w-[700px] lg:py-6 lg:max-w-[800px]">
        {proyectData.length > 0 &&
          proyectData.slice(0, showedProyects).map(({ info, src, url, ghpage }, index) => (
            <Cards
              // eslint-disable-next-line react/no-array-index-key
              key={info + index}
              info={info}
              src={src}
              ghpage={ghpage}
              cardStyles={cardStyles}
              link={{
                classList: 'text-sm my-1 hover:text-[color:var(--secondary-hover-color)]',
                text: 'Ir al repo',
                url,
              }}
            />
          ))}
      </div>

      {showedProyects > proyects && (
        <Button
          buttonStyle="my-3 px-5 py-2 text-sm tracking-wider "
          handleClick={removeShowedProyects}
          text="Ver menos..."
        />
      )}
      {showedProyects < proyectData.length && (
        <Button
          buttonStyle="my-3 px-5 py-2 text-sm tracking-wider "
          handleClick={handleShowedProyects}
          text="Ver mas..."
        />
      )}
    </>
  );

  return (
    <Section
      id="proyects"
      title="Portfolio"
      description="Algunos proyectos en los que he trabajado"
      innerContent={innerContent}
    />
  );
}