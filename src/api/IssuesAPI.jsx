import axios from "axios";
import BASE_URL from "../constants/baseUrl";
import { useEffect, useState } from "react";
import { IssueDataContext } from "../modules/issueData";
import Loading from "../pages/Loading";

const IssuesAPI = ({ children }) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(false); // 추가 데이터를 로드하는지 아닌지를 담기위한 state
  let [page, setPage] = useState(1);
  console.log(data)
  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const getMoreIssues = async () => {
    setPage((prev) => prev + 1)
    setFetching(true);
    await axios
      .get(`${BASE_URL}repos/facebook/react/issues`, {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer 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`,
          "X-Github-Api-Version": "2022-11-28",
        },
        params: {
          state: "open",
          sort: "comments",
          page: page,
        },
      })
      .then((response) => {
        const newData = data.concat(response.data);
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
    setFetching(false);
  };

    const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      getMoreIssues();
    }
  };



  if (data.length > 0)
    return (
      <IssueDataContext.Provider value={data}>
        {children}
      </IssueDataContext.Provider>
    );
  if (data.length === 0) return <Loading />;
};

export default IssuesAPI;
