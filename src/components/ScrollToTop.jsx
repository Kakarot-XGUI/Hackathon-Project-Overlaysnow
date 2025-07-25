// Created n Component --> Scroll TO Top On Every ROute

import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // or 'auto' if you want instant scroll
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;