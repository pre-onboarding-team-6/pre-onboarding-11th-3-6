import { useState } from 'react';

const usePage = () => {
  const [hasNextPage, setNextPage] = useState(true);
  const [pageCount, setPageCount] = useState(0);

  const increasePage = () => {
    setPageCount(prev => prev + 1);
  };

  return { hasNextPage, setNextPage, pageCount, increasePage };
};

export default usePage;
