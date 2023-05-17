import { useEffect, useState } from 'react';

export default function ScrollTop() {
  // Scroll listener para mostrar u ocultar el ScrollTopButton
  const [windowScroll, detectScroll] = useState(window.scrollY);
  const getScrollY = () => {
    detectScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', getScrollY);
    return () => {
      window.removeEventListener('scroll', getScrollY);
    };
  }, [windowScroll]);

  const scrollEnough = windowScroll > window.innerHeight / 2;

  const handleClick = () => {
    // para mantener la transition sin cambiar el display a none
    if (windowScroll > window.innerHeight / 2) {
      window.scrollTo(0, 0);
    }
  };

  const isVisible = scrollEnough ? 'opacity-100 cursor-pointer' : 'opacity-0 z-[-999]';

  return (
    <button
      className={`mx-[2%] my-[5%] h-16 w-16 z-[999] cursor-auto rounded-full flex items-center justify-center text-3xl fixed bottom-0 right-0 border border-[color:var(--secondary-hover-color)] bg-[color:var(--grey-hover-color)] transition duration-300 ${isVisible}`}
      type="button"
      onClick={handleClick}
    >
      ↑
    </button>
  );
}
