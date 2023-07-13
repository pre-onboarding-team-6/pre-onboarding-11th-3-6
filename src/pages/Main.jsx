import { Fragment } from 'react';
import styled from 'styled-components';
import { List, ScrollObserver, Spinner } from '../components';
import { AD_URL } from '../constants/urls';
import useObsever from '../hooks/useObserver';
import useIssues from '../hooks/useIssues';

const Banner = styled.img`
  display: block;
  padding-top: 20px;
  margin: 0 auto;
  cursor: pointer;
`;

const RefetchButton = styled.button`
  border: none;
  outline: none;
  border-radius: 10px;
  width: 110px;
  height: 40px;
  margin: 0 auto;
  border: 1px solid black;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: rgb(237, 237, 237);
  }
`;

const Main = () => {
  const { issues, getIssues, error, loading, hasNextPage } = useIssues();
  const ref = useObsever(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !loading) {
      getIssues();
    }
  });

  return (
    <main>
      <ul>
        {issues.map((issue, i) => {
          const showAdBanner = (i + 1) % 4 === 0;
          return (
            <Fragment key={issue.number}>
              <List i={i} issue={issue} />
              {showAdBanner && (
                <a href={AD_URL.to}>
                  <Banner src={AD_URL.img} alt="wanted banner" />
                </a>
              )}
            </Fragment>
          );
        })}
        {error && <RefetchButton onClick={getIssues}>다시 불러오기</RefetchButton>}
        {loading && <Spinner />}
        {!loading && <ScrollObserver observer={ref} />}
      </ul>
    </main>
  );
};

export default Main;
