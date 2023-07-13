import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useData, usePage } from '../context/IssueContext';

const IssueList = () => {
  const data = useData();
  const target = useRef(null);
  const { handlePage, isLoading } = usePage();
  const observer = new IntersectionObserver(
    e => {
      if (!isLoading && e[0].isIntersecting) handlePage();
    },
    { threshold: 1.0 }
  );

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  return (
    <>
      <ul>
        {data.map(issue => (
          <li key={issue.id}>
            <div>{issue.number}</div>
            <Link to={`/issues/${issue.number}`}>
              <div>{issue.title}</div>
            </Link>
            <span>작성자 : {issue.user.login}</span>
            <span>일자 : {issue.created_at.slice(0, 10) + issue.created_at.slice(11, 19)}</span>
            <span>코멘트 : {issue.comments}</span>
          </li>
        ))}
      </ul>
      <div ref={target}>타겟</div>
    </>
  );
};
export default IssueList;
