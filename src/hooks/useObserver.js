import { useEffect, useCallback, useRef } from 'react';

const useObserver = (onIntersect, options) => {
  const ref = useRef(null);
  const callback = useCallback(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
};

export default useObserver;
