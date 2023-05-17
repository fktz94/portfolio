import PropTypes from 'prop-types';

export default function ContactItem({ icon, title }) {
  return (
    <li className="w-full my-3 px-5 py-3 flex items-center sm:tracking-wider lg:py-4 lg:my-4 text-[color:var(--secondary-hover-color)] bg-[color:var(--black-color)]">
      <img src={icon} alt={`${icon.split('/').slice(-1)[0].split('.')[0]}-icon`} className="w-6 h-8 object-fit" />
      <span className="font-medium relative left-[7%]">{title}</span>
    </li>
  );
}

ContactItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
