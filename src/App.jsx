import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const GITHUB_API_URL = 'https://api.github.com';

const ORGANIZATION_NAME = 'facebook';

const REPOSITOLY_NAME = 'react';

const HeaderTitle = styled.h1`
  margin: 5px 0;
`;

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 1px solid black;
`;

const InfoContainer = styled.div`
  text-align: left;
`;

const Banner = styled.img`
  display: block;
  padding-top: 20px;
  margin: 0 auto;
  cursor: pointer;
`;

const App = () => {
  const [issues, setIssues] = useState([]);

  const getIssue = async () => {
    const data = await axios.get(
      `${GITHUB_API_URL}/repos/${ORGANIZATION_NAME}/${REPOSITOLY_NAME}/issues?sort=comments`
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
    <Container>
      <header>
        <HeaderTitle>{`${ORGANIZATION_NAME} / ${REPOSITOLY_NAME}`}</HeaderTitle>
      </header>
      <main>
        <ul>
          {issues?.map(({ number, title, user, created_at: createdAt, comments }, idx) => {
            const createdDate = new Date(createdAt);
            const year = createdDate.getFullYear();
            const month = createdDate.getMonth() + 1;
            const day = createdDate.getDate();
            return (
              <>
                <List key={number}>
                  <InfoContainer>
                    <h2>{`#${number} ${title}`}</h2>
                    <span>{`작성자: ${user.login}, 작성일: ${year}년 ${month}월 ${day}일`}</span>
                  </InfoContainer>
                  <div>
                    <span>코멘트: {comments}</span>
                  </div>
                </List>
                {(idx + 1) % 5 === 0 && (
                  <a href="https://www.wanted.co.kr/ ">
                    <Banner
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                      alt="wanted banner"
                    />
                  </a>
                )}
              </>
            );
          })}
        </ul>
      </main>
    </Container>
  );
};

export default App;
