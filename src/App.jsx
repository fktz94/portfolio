import React, { useEffect, useState } from 'react';
import Header from './components/Header';
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
  if (window.scrollY > 0) window.scrollTo(0, 0);

  const [currentPage, setCurrentPage] = useState('home');
  const CurrentPage = pages[currentPage].component;

  // useEffect para manejar el active de los navlinks, tipo scrollSpy
  useEffect(() => {
    const $musicianLink = document.querySelector('nav > a[href="#musician"]');
    if (currentPage === 'musician') $musicianLink.classList.add('is-active');
    if (!(currentPage === 'musician')) $musicianLink.classList.remove('is-active');
    const $sections = document.querySelectorAll('[data-scroll]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const {
            target: { id },
            isIntersecting,
          } = entry;

          const $link = document.querySelector(`nav > a[href="#${id}"]`);
          if (isIntersecting && $link) {
            $link.classList.add('is-active');
          } else if (!isIntersecting && $link) {
            $link.classList.remove('is-active');
          }
        });
      },
      { rootMargin: '-50px', threshold: [0.3] },
    );

    $sections.forEach((el) => {
      observer.observe(el);
    });

    return function cleanUp() {
      document.querySelectorAll('nav > a').forEach((item) => item.classList.remove('is-active'));
      $sections.forEach((el) => {
        observer.disconnect(el);
      });
    };
  }, [currentPage]);

  return (
    <>
      <Header currentPage={currentPage} handleCurrentPage={(page) => setCurrentPage(page)} />
      <CurrentPage handleCurrentPage={() => setCurrentPage('musician')} />
      <ScrollTop />
      <Footer />
    </>
  );
}
