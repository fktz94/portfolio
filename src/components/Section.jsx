import PropTypes from 'prop-types';

export default function Section({ description, id, innerContent, title }) {
  return (
    <section
      id={id}
      className="main-section px-6 py-4 sm:py-6 flex flex-col items-center scroll-m-[255px] md:scroll-m-[55px] md:p-10 "
      data-scroll
    >
      {/* Título de la sección */}
      <h2 className="mt-2 sm:text-lg font-medium tracking-wider text-[color:var(--secondary-color)]">
        {title.toUpperCase()}
      </h2>

      <hr className="m-1 w-1/4 border border-solid border-[color:var(--secondary-color)]" />

      {/* Breve descripción de la sección */}
      {description && (
        <h3 className="my-2 text-2xl sm:my-5 sm:text-3xl sm:max-w-[90%] tracking-wider text-center md:my-8">
          {description}
        </h3>
      )}

      {/* Contenido de la sección */}
      {innerContent}
    </section>
  );
}

Section.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  innerContent: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

Section.defaultProps = {
  description: '',
};
