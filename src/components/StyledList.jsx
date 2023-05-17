import PropTypes from 'prop-types';

export default function StyledList({ itemStyle, listContent, listStyle }) {
  return (
    <ul className={`list-disc ${listStyle}`}>
      {listContent.map((item) => (
        <li key={item} className={`text-[color:var(--secondary-color)] ${itemStyle}`}>
          <span className="text-[color:var(--white-color)]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

StyledList.propTypes = {
  itemStyle: PropTypes.string,
  listContent: PropTypes.arrayOf(PropTypes.string).isRequired,
  listStyle: PropTypes.string,
};

StyledList.defaultProps = {
  itemStyle: '',
  listStyle: '',
};
