import { createContext, useState } from 'react';

export const HttpResultState = createContext({
  loading: true || false,
  error: {
    status: null,
    message: '',
  },
  setError: () => {},
  setLoading: () => {},
});

const HttpResultStateProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const contextValue = {
    loading,
    error,
    setLoading: state => {
      setLoading(state);
    },
    setError: error => setError({ ...error, error }),
  };

  return <HttpResultState.Provider value={contextValue}>{children}</HttpResultState.Provider>;
};

export default HttpResultStateProvider;
