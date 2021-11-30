import { useState, useEffect, useRef } from 'react';

const useStickyElement = (defaultSticky = false) => {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const elRef = useRef(null);

  useEffect(() => {
    const toggleSticky = () => {
      setIsSticky(window.pageYOffset > elRef.current.offsetHeight);
    };

    window.addEventListener('scroll', toggleSticky);
    return () => {
      window.removeEventListener('scroll', toggleSticky);
    };
  }, []);

  return { elRef, isSticky };
};

export default useStickyElement;
