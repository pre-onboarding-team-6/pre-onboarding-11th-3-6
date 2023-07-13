import { useNavigate } from "react-router-dom";
import styled from "styled-components"

const Issues = (props) => {
  const { data, index } = props;

  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/detail/${e.number}`)
  }

  return (
    <>
    <ListBox>
      <ListContainer key={index} onClick={() => handleClick(data)}>
        <span>#{data.number} </span>
        <span>{data.title}</span>
        <IssuesContants>
        <p>작성자 : {data.user.login} <span>업로드날짜 : {data.created_at}</span></p>
        <Comment>코멘트 수 : {data.comments}</Comment>
        </IssuesContants>
      </ListContainer>
    </ListBox>
    {(index + 1) % 4 === 0 && (
          <Ad href=" https://www.wanted.co.kr/ ">
            <img src="https://www.venturesquare.net/849432/%ec%9b%90%ed%8b%b0%eb%93%9c%eb%9e%a9"></img>
          </Ad>
        )}
    </>
  );
};

export default Issues;

const ListBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;

`

const Comment = styled.div`
  position: relative;
  bottom: 15px;
`

const ListContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 30px;
  border-bottom: 1px solid black;
  span:nth-child(2){
    font-weight: bolder;
  }

`
const IssuesContants = styled.div`
  display: flex;
  justify-content: space-between;
`

const Ad = styled.a`
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: center;
  margin:auto;
  border: 1px solid gray;
`