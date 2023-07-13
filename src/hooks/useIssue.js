import { useContext, useEffect, useState } from 'react';
import { fetchIssue } from '../apis/issues';
import { HttpResultState } from '../store/httpResultContext';

const useIssue = number => {
  const [issue, setIssue] = useState({});
  const { loading, setError, setLoading } = useContext(HttpResultState);

  const getIssue = async number => {
    setLoading(true);
    const { issue, status, message } = await fetchIssue(number);

    if (status >= 400) {
      setError({ status, message });
      return;
    }

    setIssue({ ...issue, issue });
    setLoading(false);
  };

  useEffect(() => {
    getIssue(number);
  }, []);

  return { issue, loading, getIssue };
};

export default useIssue;
