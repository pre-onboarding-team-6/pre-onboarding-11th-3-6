import { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { List, ScrollObserver, Spinner } from '../components';
import { IssuesContext } from '../context/Issues';
import { AD_URL } from '../constants/urls';
import useObsever from '../hooks/useObserver';

const Banner = styled.img`
  display: block;
  padding-top: 20px;
  margin: 0 auto;
  cursor: pointer;
`;

const Main = () => {
  const { issues, isLoading, error, hasNextPage, getNextPage } = useContext(IssuesContext);
  const observerRef = useObsever(getNextPage);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <ul>
        {issues.map((issue, i) => {
          const showAdBanner = (i + 1) % 5 === 0;
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
        {hasNextPage && <ScrollObserver observer={observerRef} />}
      </ul>
    </main>
  );
};

export default Main;
