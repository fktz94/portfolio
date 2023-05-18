import Section from './Section';
import Cards from './Cards';
import skillsData from '../skillsData';

export default function Skills() {
  const cardClasses = {
    figcaptionStyle: 'text-xs m-1 sm:text-base sm:my-2 sm:tracking-wider md:text-lg md:tracking-wide',
    figureStyle:
      'skills-animation max-w-[100px] sm:max-w-[180px] md:max-w-[140px] md:justify-evenly bg-[color:var(--grey-color)]',
    imgStyle: 'w-[80%]',
  };

  const innerContent = (
    <div className="skillsContainer py-2 sm:w-[90%] md:w-auto lg:py-12">
      {skillsData.length > 0 &&
        skillsData.map(({ info, src, url }) => (
          <Cards key={info} info={info} src={src} url={url} cardStyles={cardClasses} />
        ))}
    </div>
  );

  return (
    <Section id="skills" title="Skills" description="Tecnologías con las que trabajo" innerContent={innerContent} />
  );
}
