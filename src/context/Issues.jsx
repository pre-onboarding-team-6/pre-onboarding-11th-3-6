import { createContext, useEffect, useState } from 'react';
// import { createContext, useCallback, useEffect, useState } from 'react';
import { getIssues } from '../api/github';
// import { getIssue, getIssues } from '../api/github';

export const IssuesContext = createContext(null);

export const IssuesProvider = ({ children }) => {
  const [issues, setIssues] = useState([]);
  // const [issue, setIssue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    <IssuesContext.Provider value={{ issues, isLoading, error }}>
      {/* <IssuesContext.Provider value={{ issues, issue, isLoading, error, getIssueDetail }}> */}
      {children}
    </IssuesContext.Provider>
  );
};
