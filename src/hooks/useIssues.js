import { useContext, useEffect, useState } from 'react';
import { IssuesContext } from '../context/Issues';
import { getIssues as getIssuesApi } from '../api/github';
import useHttp from './useHttp';

const useIssues = () => {
  const { issues, setIssues } = useContext(IssuesContext);
  const { loading, error, setLoading, setHttpError } = useHttp();
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState(0);

  const getIssues = async () => {
    try {
      setLoading(true);
      const { data } = await getIssuesApi({ sort: 'comments', page });
      setIssues(prev => [...prev, ...data]);
      if (data.length === 0) {
        setHasNextPage(false);
      }
      setPage(prev => prev + 1);
    } catch (e) {
      setHttpError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getIssues();
  }, []);
  return { issues, loading, error, hasNextPage, getIssues };
};

export default useIssues;
