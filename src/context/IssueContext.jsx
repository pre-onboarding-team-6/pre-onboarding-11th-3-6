import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const IssueContext = createContext();
export const PageContext = createContext();
export const useData = () => useContext(IssueContext);
export const usePage = () => useContext(PageContext);
const IssueDataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const handlePage = () => {
    setPage(prev => prev + 1);
  };
  useEffect(() => {
    setIsLoading(true);
    const Getdata = async () => {
      await axios
        .get(`https://api.github.com/repos/facebook/react/issues?page=${page}&sort=comments`, {
          headers: {
            Authorization: import.meta.env.VITE_TOKEN,
          },
        })
        .then(res => {
          setData([...data, ...res.data]);
          setIsLoading(false);
        });
    };
    Getdata();
  }, [page]);
  return (
    <IssueContext.Provider value={data}>
      <PageContext.Provider value={{ handlePage, isLoading, page }}>{children}</PageContext.Provider>
    </IssueContext.Provider>
  );
};

export default IssueDataProvider;
