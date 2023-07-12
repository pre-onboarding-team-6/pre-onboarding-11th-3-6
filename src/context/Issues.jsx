import { createContext, useEffect, useState } from 'react';
import getIssue from '../api/github';

export const IssueContext = createContext(null);

export const IssueProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getIssue();
        setIssues(data);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return <IssueContext.Provider value={{ issues, isLoading, error }}>{children}</IssueContext.Provider>;
};
