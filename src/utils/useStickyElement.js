import { useState, useEffect, useRef, useCallback } from 'react';

const useStickyElement = (defaultSticky = false) => {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const elRef = useRef(null);

  const toggleSticky = useCallback(() => {
    if (window.pageYOffset > elRef.current.offsetHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, [isSticky]);

  useEffect(() => {
    const handleScroll = () => {
      toggleSticky();
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleSticky]);
  return { elRef, isSticky };
};

export default useStickyElement;
