import styled from 'styled-components';
import { AD_URL } from '../constants/urls';

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  border-bottom: 1px solid black;
`;

const Info = styled.div`
  text-align: left;
`;

const Banner = styled.img`
  display: block;
  padding-top: 20px;
  margin: 0 auto;
  cursor: pointer;
`;

const List = ({ number, title, user, createdAt, comments, idx }) => {
  const createdDate = new Date(createdAt);
  const year = createdDate.getFullYear();
  const month = createdDate.getMonth() + 1;
  const day = createdDate.getDate();

  const showAdBanner = (idx + 1) % 5 === 0;

  return (
    <>
      <Container>
        <Info>
          <h2>{`#${number} ${title}`}</h2>
          <span>{`작성자: ${user.login}, 작성일: ${year}년 ${month}월 ${day}일`}</span>
        </Info>
        <div>
          <span>코멘트: {comments}</span>
        </div>
      </Container>
      {showAdBanner && (
        <a href={AD_URL.to}>
          <Banner src={AD_URL.img} alt="wanted banner" />
        </a>
      )}
    </>
  );
};

export default List;
