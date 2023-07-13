import { useContext, useEffect, useState } from 'react';
import { fetchIssues } from '../apis/issues';
import { HttpResultState } from '../store/httpResultContext';
import usePage from './usePage';

const useIssues = () => {
  const [issues, setIssues] = useState([]);
  const { hasNextPage, setNextPage, pageCount, increasePage } = usePage();
  const { loading, setError, setLoading } = useContext(HttpResultState);

  const getIssues = async () => {
    setLoading(true);
    increasePage();
    const { issues, status, message } = await fetchIssues({ page: pageCount });
    if (status >= 400) {
      setError({ status, message });
      return;
    }
    if (issues.length === 0) {
      setNextPage(false);
    }
    setIssues(prevIssues => prevIssues.concat(issues));
    setLoading(false);
  };

  useEffect(() => {
    getIssues();
  }, []);

  return { issues, getIssues, hasNextPage, loading, pageCount };
};

export default useIssues;
