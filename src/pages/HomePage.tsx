import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import CheckBox from "../components/CheckBox";
import { useSearchParams } from "react-router-dom";
import { Entry } from "../types/dbTypes";
import "../styles/homePageStyle.scss"
import CardView from "../components/CardView";


function HomePage() {
  const [Data, loadStatus] = useFetch(new URL('http://localhost:3000/api/posts'));
  const [CurrentList, updateList] = useState([]);
  const [FilteredList, updateFList] = useState([]);
  const emptyArray: Array<string> = []
  const [Filter, setFilter] = useState(emptyArray);
  const [Limit, setLimit] = useState(8);
  const [SearchParams, SetSearchParams] = useSearchParams();

  useEffect(() => {
    if (loadStatus) {
      updateList([])
      loadFilters()
      renderDisplayList()
    }
  }, [Filter, Limit])

  //guard 
  if (!loadStatus) return <div>Loading... </div>

  const handleFilters = (filters: Array<string>) => {
    SetSearchParams({ "filter": filters.reduce((A, item) => A = A + item + ";", "") })
    updateList([]);
    setLimit(8);
    setFilter(filters);
  }

  const loadFilters = () => {
    (SearchParams.get("filter") === null) ?
      updateFList(Data) :
      Filter.length === SearchParams.get("filter")!.split(";").length - 1 ?
        Filter.length === 0 ?
          updateFList(Data) :
          updateFList(Data.filter((item: Entry) => checkCat(item))) :
        setFilter(SearchParams.get("filter")!.split(";").filter((item) => item !== ""))

    renderDisplayList()

  }

  const checkCat = (item: Entry) => {
    return item.categories.reduce((Accu, category) =>
      Accu = (Filter.indexOf(category.name) > -1) || Accu,
      false
    );
  }

  //load more button logic
  const onLoadMore = () => {
    if (Limit + 8 > FilteredList.length) return;
    setLimit(Limit + 8);
  }

  //renders the list to be displayed
  const renderDisplayList = () => {
    const newDisplayList = FilteredList.filter((_, i) =>
      i < Limit
    );
    updateList(newDisplayList);
  }

  if (loadStatus && CurrentList.length < 1) {
    loadFilters();
  };

  return <div className="containerHome" >
    <div className="checkboxDiv">
      <CheckBox
        handleFilters={(filters: Array<string>) => handleFilters(filters)}
        catList={Data}
        filter={Filter}
      />
    </div>
    <div className="listDiv">
      {CardView(CurrentList)}
      <br />
      <div className={Limit + 8 > FilteredList.length ? "hide" : "shown"}>
        <button className="loadBtn" onClick={onLoadMore}>Load More</button>
      </div>
    </div>

  </div>;
}

export default HomePage;

