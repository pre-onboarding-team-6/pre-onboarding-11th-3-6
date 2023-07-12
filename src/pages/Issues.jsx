import { useState, useCallback, useRef, useEffect } from 'react';
import IssuesBox from '../components/issues/IssuesBox';
import { Loading, Error } from '../components/common';
import { getIssues } from '../apis/issue';
import useGetIssues from '../hooks/useGetIssues';

const Issues = () => {
  const [page, setPage] = useState(1);
  const getFunc = useCallback(repo => getIssues(page)(repo), [page]);
  const [issues, isLoading, error] = useGetIssues(getFunc);
  const bottom = useRef();

  useEffect(() => {
    if (bottom.current && !isLoading) {
      const observer = new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          setPage(page => page + 1);
        }
      });
      observer.observe(bottom.current);
    }
  }, [bottom, isLoading]);

  return (
    <main>
      {issues[0] && <IssuesBox issues={issues} />}
      {isLoading && <Loading />}
      {error && <Error />}
      <div ref={bottom} />
    </main>
  );
};

export default Issues;
