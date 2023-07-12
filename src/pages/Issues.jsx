import { useState, useCallback, useRef, useEffect } from 'react';
import IssuesBox from '../components/issues/IssuesBox';
import { Loading, Error } from '../components/common';
import { getIssues } from '../apis/issue';
import useGetIssues from '../hooks/useGetIssues';

const Issues = () => {
  const [page, setPage] = useState(1);
  const getFunc = useCallback(repo => getIssues(page)(repo), [page]);
  const [issues, isLoading, error] = useGetIssues(getFunc);
  const [issuesBox, setIssuesBox] = useState([]);
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

  useEffect(() => {
    if (issues[0]) {
      const newIssues = [];
      const rest = issuesBox.length ? issuesBox.length % 5 : 0;
      issues.forEach((issue, idx) => {
        if ((idx || rest) && (idx + rest) % 4 === 0) newIssues.push('ad');
        newIssues.push(issue);
      });
      setIssuesBox(box => [...box, ...newIssues]);
    }
  }, [issues]);

  return (
    <main>
      {issuesBox[0] && <IssuesBox issues={issuesBox} />}
      {isLoading && <Loading />}
      {error && <Error />}
      <div ref={bottom} />
    </main>
  );
};

export default Issues;
