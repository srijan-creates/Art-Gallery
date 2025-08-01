import { useEffect } from 'react';

const ScrollToTopOnReload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTopOnReload;
