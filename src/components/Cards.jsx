import PropTypes from 'prop-types';

export default function Cards({ cardStyles: { figcaptionStyle, figureStyle, imgStyle }, ghpage, info, link, src }) {
  const { classList, text, url } = link;

  return (
    <figure
      className={`flex flex-col items-center justify-evenly mx-2 my-1 p-2 border-b-2 border-r-2 border-solid rounded-2xl border-[color:var(--secondary-hover-color)] ${figureStyle}`}
    >
      <img src={src} alt={info} className={imgStyle} />
      <figcaption className={figcaptionStyle}>{info}</figcaption>

      {/* Agrega link a la Card de ser necesario (sección proyects y music) */}
      {Object.keys(link).length > 0 && (
        <a href={url} className={classList} target="_blank" rel="noreferrer">
          {text}
        </a>
      )}

      {ghpage && (
        <a href={ghpage} className={classList} target="_blank" rel="noreferrer">
          Visitar el sitio
        </a>
      )}
    </figure>
  );
}

Cards.propTypes = {
  cardStyles: PropTypes.objectOf(PropTypes.string),
  ghpage: PropTypes.string,
  info: PropTypes.string.isRequired,
  link: PropTypes.objectOf(PropTypes.string),
  src: PropTypes.string.isRequired,
};

Cards.defaultProps = {
  cardStyles: {},
  ghpage: '',
  link: {},
};
