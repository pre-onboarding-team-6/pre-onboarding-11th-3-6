import { useEffect, useRef } from 'react';

const useScroll = (callBack, target, pageNum, loading) => {
  const copiedPageNum = pageNum;
  const height = useRef(1);

  useEffect(() => {
    if (loading === 'initial') {
      setTimeout(() => {
        observer.observe(target.current);
      }, 1000);
    }
  }, []);

  const options = {
    threshold: 1.0,
  };

  const changePage = () => {
    copiedPageNum.current += 1;
    height.current += 1;
    callBack();
  };

  const observer = new IntersectionObserver(changePage, options);

  return { height };
};

export default useScroll;
