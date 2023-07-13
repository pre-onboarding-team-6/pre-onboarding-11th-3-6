import { createContext, useContext, useState } from 'react';
import { HttpResultState } from './httpResultContext';
import { fetchIssue } from '../apis/issues';

export const IssueContext = createContext({
  issue: {},
  setIssue: () => {},
});

const IssueContextProvider = ({ children }) => {
  const [issue, setIssue] = useState('facebook');
  const { setLoading, setError } = useContext(HttpResultState);

  const setIssueHandler = async number => {
    setLoading(true);
    const { issue, status, message } = await fetchIssue(number);

    if (status >= 400) {
      setError({ status, message });
      return;
    }

    setIssue({ ...issue, issue });
    setLoading(false);
  };
  const contextValue = {
    issue,
    setIssue: number => setIssueHandler(number),
  };

  return <IssueContext.Provider value={contextValue}>{children}</IssueContext.Provider>;
};

export default IssueContextProvider;
