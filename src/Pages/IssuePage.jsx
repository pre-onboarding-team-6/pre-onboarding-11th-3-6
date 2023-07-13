import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const IssuePage = () => {
  const params = useParams();
  const [issueData, setIssueData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const Getdata = async id => {
      await axios
        .get(`https://api.github.com/repos/facebook/react/issues/${id}`, {
          headers: {
            Authorization: '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',
          },
        })
        .then(res => {
          setIssueData(res.data);
          setUserData(res.data.user);
          setIsLoading(false);
        });
    };
    Getdata(params.id);
  }, [params]);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div>{issueData.number}</div>
      <div>{issueData.title}</div>
      <div>{issueData.created_at}</div>
      <div>{userData.login}</div>
      <div>{issueData.comments}</div>
      <img src={userData.avatar_url} alt="profile" />
      <ReactMarkdown>{issueData.body}</ReactMarkdown>
    </>
  );
};
export default IssuePage;
