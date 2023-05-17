import PropTypes from 'prop-types';

export default function MusicSection({ innerContent, containerStyle, title }) {
  return (
    <section className={`py-7 ${containerStyle}`}>
      <h3 className="text-2xl md:text-3xl">{title}</h3>

      <hr className="my-2 w-8 sm:w-16 border border-solid border-[color:var(--secondary-color)]" />

      {innerContent}
    </section>
  );
}

MusicSection.propTypes = {
  containerStyle: PropTypes.string,
  innerContent: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

MusicSection.defaultProps = {
  containerStyle: '',
};
