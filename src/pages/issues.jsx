import { useContext } from 'react';
import styled from 'styled-components';
import IssueItem from '../components/IssueItem';
import useIssues from '../hooks/useIssues';
import useIntersect from '../hooks/useIntersect';
import Loading from '../components/Loading';
import Ad from '../components/Ad';
import { HttpResultState } from '../store/httpResultContext';
import RedirectToError from '../components/RedirectToError';

const PageChangeBar = styled.div`
  width: 100%;
  height: 5px;
`;

const Divider = styled.div`
  height: 1px;
  margin-bottom: 20px;
  background-color: gray;
  :last-child {
    display: none;
  }
`;
const Issues = () => {
  const { issues, getIssues, hasNextPage, loading, pageCount } = useIssues();
  const { error } = useContext(HttpResultState);
  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !loading) {
      getIssues();
    }
  });
  const ad = index => index % 5 === 0;
  if (error) return <RedirectToError RedirectToError />;
  return (
    <div style={{ height: `${pageCount.current * 100}vh` }}>
      {issues.map(({ number, title, login, createdAt, commentCount }, index) => (
        <>
          <IssueItem
            key={index}
            number={number}
            title={title}
            login={login}
            createdAt={createdAt}
            commentCount={commentCount}
          />
          <Divider />
          {ad(index + 1) && (
            <Ad
              imageUrl="https://blog.kakaocdn.net/dn/0aDVr/btrbQaX9WJr/p63pboivEKfeoYcIDKQYN1/img.jpg"
              link="https://www.wanted.co.kr/jobsfeed"
            />
          )}
        </>
      ))}
      {loading && <Loading />}
      {!loading && <PageChangeBar ref={ref} />}
    </div>
  );
};
export default Issues;
