import PropTypes from 'prop-types';
import Main from './Main';
import Sections from './Sections';

export default function Home({ handleCurrentPage }) {
  return (
    <>
      <Main />
      <Sections handleCurrentPage={handleCurrentPage} />
    </>
  );
}

Home.propTypes = {
  handleCurrentPage: PropTypes.func.isRequired,
};
