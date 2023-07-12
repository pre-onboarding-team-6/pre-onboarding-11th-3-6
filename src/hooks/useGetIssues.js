import { useContext, useEffect, useState } from 'react';
import RepoContext from '../contexts/RepoContext';

const useGetIssues = getFunc => {
  const repo = useContext(RepoContext);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      await getFunc(repo).then(res => setData(res.data));
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    getData();
  }, [getFunc, setData, setIsLoading, setError]);

  useEffect(() => {
    setData([]);
  }, [repo]);
  return [data, isLoading, error];
};

export default useGetIssues;
