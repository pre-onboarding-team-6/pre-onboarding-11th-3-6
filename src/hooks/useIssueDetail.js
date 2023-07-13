import { useContext, useEffect } from 'react';
import { getIssue } from '../api/github';
import { IssueDetailContext } from '../context/IssueDetail';
import useHttp from './useHttp';

const useIssue = issueNumber => {
  const { issue, setIssue } = useContext(IssueDetailContext);
  const { loading, error, setLoading, setHttpError } = useHttp();

  const getIssueDetail = async () => {
    try {
      setLoading(true);
      const { data } = await getIssue(issueNumber);
      setIssue(data);
    } catch (e) {
      setHttpError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getIssueDetail();
  }, []);

  return { issue, loading, error, getIssueDetail };
};

export default useIssue;
