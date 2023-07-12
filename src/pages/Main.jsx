import { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { List, ScrollObserver } from '../components';
import { IssuesContext } from '../context/Issues';
import { AD_URL } from '../constants/urls';

const Banner = styled.img`
  display: block;
  padding-top: 20px;
  margin: 0 auto;
  cursor: pointer;
`;

const Main = () => {
  const { issues, isLoading, error } = useContext(IssuesContext);

  if (isLoading) {
    return <div>...loading</div>;
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
        <ScrollObserver />
      </ul>
    </main>
  );
};

export default Main;
