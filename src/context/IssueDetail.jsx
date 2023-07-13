import { createContext, useState } from 'react';

export const IssueDetailContext = createContext(null);

export const IssueDetailProvider = ({ children }) => {
  const [issue, setIssue] = useState(null);

  const contextValue = {
    issue,
    setIssue,
  };
  return <IssueDetailContext.Provider value={contextValue}>{children}</IssueDetailContext.Provider>;
};
