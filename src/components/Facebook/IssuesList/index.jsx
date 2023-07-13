import { useContext } from "react";
import { IssueDataContext } from "../../../modules/issueData";
import Issues from "../../../pages/Issues";


const IssuesList = () => {

  const Data = useContext(IssueDataContext);
  return (  
    <div>
      {Data.map((data, index) => (
        <Issues 
          key={index}
          data={data}
          index={index}
        /> 
      ))}
    </div>
  );
}

export default IssuesList;
