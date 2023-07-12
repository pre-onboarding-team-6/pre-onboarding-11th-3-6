import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 10px;
  border-bottom: 1px solid black;
`;

const Title = styled.h2`
  font-size: 16px;
`;

const Info = styled.div`
  text-align: left;
`;

const List = ({ issue }) => {
  const { number, title, user, created_at: createdAt, comments } = issue;

  const { id } = useParams();

  const createdDate = new Date(createdAt);
  const year = createdDate.getFullYear();
  const month = createdDate.getMonth() + 1;
  const day = createdDate.getDate();

  return (
    <Container>
      <Info>
        {!id ? (
          <Link to={`detail/${number}`}>
            <Title>{`#${number} ${title}`}</Title>
          </Link>
        ) : (
          <Title>{`#${number} ${title}`}</Title>
        )}
        <span>{`작성자: ${user.login}, 작성일: ${year}년 ${month}월 ${day}일`}</span>
      </Info>
      <div>
        <span>코멘트: {comments}</span>
      </div>
    </Container>
  );
};

export default List;
