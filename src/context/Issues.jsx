import { createContext, useState, useCallback } from 'react';
import { getIssue, getIssues } from '../api/github';

export const IssuesContext = createContext(null);

export const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(2);

  const getIssueDetail = useCallback(async issueNumber => {
    try {
      setIsLoading(true);
      const { data } = await getIssue(issueNumber);
      setIssue(data);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getNextPage = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await getIssues({ sort: 'comments', page });
      setIssues(prev => [...prev, ...data]);
      if (data.length === 0) {
        setHasNextPage(false);
      }
      setPage(prev => prev + 1);
    } catch (e) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  return (
    <IssuesContext.Provider value={{ issues, issue, isLoading, error, hasNextPage, getNextPage, getIssueDetail }}>
      {children}
    </IssuesContext.Provider>
  );
};
