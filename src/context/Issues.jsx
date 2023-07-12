import { createContext, useState, useCallback, useEffect } from 'react';
// import { createContext, useCallback, useEffect, useState } from 'react';
import { getIssues } from '../api/github';
// import { getIssue, getIssues } from '../api/github';

export const IssuesContext = createContext(null);

export const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  // const [issue, setIssue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(2);

  // const getIssueDetail = useCallback(async issueNumber => {
  //   try {
  //     setIsLoading(true);
  //     const { data } = await getIssue(issueNumber);
  //     setIssue(data);
  //   } catch (e) {
  //     setError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, []);

  const getNextPage = useCallback(async () => {
    try {
      const { data } = await getIssues({ sort: 'comments', page });
      setIssues(prev => [...prev, ...data]);
      if (data.length === 0) {
        setHasNextPage(false);
      }
    } catch (e) {
      setError(true);
    } finally {
      setPage(prev => prev + 1);
    }
  }, [page]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getIssues({ sort: 'comments' });
        setIssues(data);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <IssuesContext.Provider value={{ issues, isLoading, error, hasNextPage, getNextPage }}>
      {/* <IssuesContext.Provider value={{ issues, issue, isLoading, error, getIssueDetail }}> */}
      {children}
    </IssuesContext.Provider>
  );
};
