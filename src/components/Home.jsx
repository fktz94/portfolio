import PropTypes from 'prop-types';
import Header from './Header';
import Main from './Main';
import Sections from './Sections';
import Footer from './Footer';

export default function Home({ handleCurrentPage }) {
  return (
    <>
      <Header handleCurrentPage={handleCurrentPage} />
      <Main />
      <Sections handleCurrentPage={handleCurrentPage} />
      <Footer />
    </>
  );
}

Home.propTypes = {
  handleCurrentPage: PropTypes.func.isRequired,
};
