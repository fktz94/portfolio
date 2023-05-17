import PropTypes from 'prop-types';

export default function Button({ buttonStyle, handleClick, text }) {
  return (
    <button
      type="button"
      className={`border rounded-sm text-[color:var(--secondary-color)] border-[color:var(--secondary-color)] hover:bg-[color:var(--black-color)] hover:text-[color:var(--secondary-hover-color)] ${
        buttonStyle.length > 0 ? buttonStyle : ''
      }`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  buttonStyle: PropTypes.string,
  handleClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  buttonStyle: '',
  handleClick: () => {},
};
