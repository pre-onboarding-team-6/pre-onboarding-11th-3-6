import React, { useContext } from "react";
import { IssueDataContext } from "../modules/issueData";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown'

const Detail = () => {
  const Data = useContext(IssueDataContext);
  let { id } = useParams();
  const datalist = Data.find((data) => data.number === Number(id));
  
  return (
    <>
      <div>
        <h1>{datalist?.title}</h1>
        <p>#{datalist?.number}</p>
        <p>작성자 : {datalist?.user.login}</p>
        <p>작성일 : {datalist?.created_at}</p>
        <p>코멘트 수 : {datalist?.comments}</p>
        <Profile src={datalist?.user.avatar_url} alt="이미지 불러오기 실패" />
        <ReactMarkdown>{datalist?.body}</ReactMarkdown>
      </div>
    </>
  );
};

export default Detail;

const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`