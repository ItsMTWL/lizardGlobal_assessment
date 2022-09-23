import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Category } from "../types/dbTypes";

function DetailPage() {
  const { object_id } = useParams();
  const [Data, Status] = useFetch(new URL('http://localhost:3000/api/posts'), object_id);
  const navigate = useNavigate();

  if (!Status) return <div> Loading... </div>

  const listCat = (item: Category) => {
    return <li>{item.name}</li>
  }

  return <div style={{ width: `75%`, margin: '2rem auto', border: '3px solid black' }} >
    <button
      onClick={() => navigate(-1)}
    > Back but more beutiful later</button>
    <br />
    <div>
      <h3>{Data.title}</h3>
    </div>
    <div >
      <img src={Data.author.avatar} alt={Data.author.name}></img>
      <h4>{Data.author.name}</h4>
    </div>
    <div>
      <ul>
        {Data.categories.map((item: Category) => listCat(item))}
      </ul>

    </div>
    <div>
      <p>{Data.summary}</p>

    </div>
  </div>
}

export default DetailPage