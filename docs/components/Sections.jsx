import PropTypes from 'prop-types';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Proyects from './Proyects';
import Contact from './Contact';

export default function Sections({ handleCurrentPage }) {
  return (
    <>
      <Skills />
      <AboutMe handleCurrentPage={handleCurrentPage} />
      <Proyects />
      <Contact />
    </>
  );
}

Sections.propTypes = {
  handleCurrentPage: PropTypes.func.isRequired,
};
