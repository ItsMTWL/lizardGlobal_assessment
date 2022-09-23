import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Category } from "../types/dbTypes";
import "../styles/designPagestyle.scss"
import LeftCircleOutlined from "@ant-design/icons/lib/icons/LeftCircleOutlined";

function DetailPage() {
  const { object_id } = useParams();
  const [Data, Status] = useFetch(new URL('http://localhost:3000/api/posts'), object_id);
  const navigate = useNavigate();

  if (!Status) return <div> Loading... </div>

  const listCat = (item: Category) => {
    return <li>{item.name}</li>
  }


  return <div className="container">
    <button
      className="backBtn"
      onClick={() => navigate(-1)}
    ><LeftCircleOutlined className="backIcon" /></button>
    <div className="titleDiv">
      <h3>{Data.title}</h3>
    </div>
    <div className="authorDiv">
      <img src={Data.author.avatar} alt={Data.author.name}></img>
      <h4 className="title">{Data.author.name}</h4>
    </div>
    <div className="catDiv">
      <ul>
        {Data.categories.map((item: Category) => listCat(item))}
      </ul>
    </div>
    <div className="summaryDiv">
      <p>{Data.summary}</p>

    </div>
  </div>
}

export default DetailPage