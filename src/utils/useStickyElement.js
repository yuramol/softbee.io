import { useState, useEffect, useRef } from 'react';

const StickyElement = (defaultSticky = false) => {
  const [isSticky, setIsSticky] = useState(defaultSticky);
  const elRef = useRef(null);
  const toggleSticky = ({ top }) => {
    if (top <= -elRef.current.offsetHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      toggleSticky(elRef.current.getBoundingClientRect());
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleSticky]);
  return { elRef, isSticky };
};

export default StickyElement;
