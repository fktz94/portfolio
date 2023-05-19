import PropTypes from 'prop-types';

export default function ContactItem({ handleClick, icon, title }) {
  const alt = `${icon.split('/').slice(-1)[0].split('.')[0]}`;
  return (
    <li className="w-full" id={alt}>
      <button
        type="button"
        id={alt}
        className="flex items-center w-full my-3 px-5 py-3 border border-transparent sm:tracking-wider lg:py-4 lg:my-4 text-[color:var(--secondary-color)] bg-[color:var(--black-color)] hover:text-[color:var(--secondary-hover-color)] hover:bg-[color:var(--black-hover-color)] active:border-[color:var(--secondary-color)] active:bg-[color:var(--grey-color)]"
        onClick={handleClick}
      >
        <img src={icon} alt={`${alt} icon`} className="w-6 h-8 object-fit" />

        <span className="font-medium relative left-[7%]">{title}</span>
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  handleClick: PropTypes.func,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

ContactItem.defaultProps = {
  handleClick: () => {},
};
