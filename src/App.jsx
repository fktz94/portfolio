import React, { useEffect, useState } from 'react';
import Header from './components/Header';
// import Main from './components/Main';
// import Sections from './components/Sections';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Musician from './components/Musician';
import Home from './components/Home';

const pages = {
  home: {
    name: 'home',
    component: Home,
  },
  musician: {
    name: 'musician',
    component: Musician,
  },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const CurrentPage = pages[currentPage].component;

  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => setCurrentSection(''), []);

  if (window.scrollY > 0) window.scrollTo(0, 0);

  return (
    <>
      <Header
        handleCurrentPage={(page) => setCurrentPage(page)}
        currentPage={currentPage}
        currentSection={currentSection}
      />
      <CurrentPage handleCurrentPage={() => setCurrentPage('musician')} />
      <ScrollTop />
      <Footer />
    </>
  );
}

// const [musicSection, setMusicSection] = useState(false);
// const toggleMusicSection = () => {
//   setMusicSection((oldMusicSection) => setMusicSection(!oldMusicSection));
// };

// return !musicSection ? (
//   <>
//     <Header toggleMusicSection={toggleMusicSection} />
//     <Main />
//     <Sections toggleMusicSection={toggleMusicSection} />
//     <Footer />
//   </>
// ) : (
//   <>
//     <Musician toggleMusicSection={toggleMusicSection} />
//     <ScrollTop />
//   </>
// );
