import { createContext, useState } from 'react';

export const ReposContext = createContext({
  organization: '',
  repos: '',
  setOrganization: () => {},
  setRepos: () => {},
});

const ReposContextProvider = ({ children }) => {
  const [organization, setOrganization] = useState('facebook');
  const [repos, setRepos] = useState('react');
  const contextValue = {
    organization,
    repos,
    setOrganization: issues => {
      setOrganization(issues);
    },

    setRepos: repos => {
      setRepos(repos);
    },
  };

  return <ReposContext.Provider value={contextValue}>{children}</ReposContext.Provider>;
};

export default ReposContextProvider;
