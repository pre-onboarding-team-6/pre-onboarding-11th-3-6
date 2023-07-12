import { useRef, useEffect, useCallback } from 'react';

const useObsever = callback => {
  const observerRef = useRef(null);

  const handleObserver = useCallback(
    entries => {
      const [target] = entries;
      if (target.isIntersecting) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    const element = observerRef.current;
    const observer = new IntersectionObserver(handleObserver);

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [handleObserver]);

  return observerRef;
};

export default useObsever;
