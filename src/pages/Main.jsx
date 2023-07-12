import axios from 'axios';
import { useEffect, useState } from 'react';
import { List } from '../components';
import { API_URL } from '../constants/urls';

const Main = () => {
  const [issues, setIssues] = useState([]);

  const getIssue = async () => {
    const data = await axios.get(
      `${API_URL.github}/repos/${API_URL.organization}/${API_URL.repository}/issues?sort=comments`
    );

    return data;
  };

  useEffect(() => {
    (async () => {
      const { data } = await getIssue();
      setIssues(data);
    })();
  }, []);

  return (
    <main>
      <ul>
        {issues?.map(({ number, title, user, created_at: createdAt, comments }, idx) => (
          <List
            key={number}
            number={number}
            title={title}
            user={user}
            createdAt={createdAt}
            comments={comments}
            idx={idx}
          />
        ))}
      </ul>
    </main>
  );
};

export default Main;
