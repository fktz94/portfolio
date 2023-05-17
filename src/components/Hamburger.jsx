import PropTypes from 'prop-types';

export default function Hamburger({ onClick, state }) {
  return (
    <button
      onClick={onClick}
      className={`p-0 hamburger hamburger--collapse ${state ? 'is-active' : ''} md:hidden`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  state: PropTypes.bool.isRequired,
};
