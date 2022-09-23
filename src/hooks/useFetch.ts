import { useState, useEffect } from "react";
import {Entry} from "../types/dbTypes"

const useFetch = (url:URL, id = "") => {
    const emptyArray: Array<any> = [] 
    const [data, setData] = useState(emptyArray);
    const [status, setLoadStatus] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data.posts))
            .then(() => setLoadStatus(true)); //sets  true when data successfully loaded
    }, []);

    if (!status) return[data,status]    //guard 

    return id === ""?
        [data, status] : 
        [data.filter((item:Entry)=>item.id === id)
            .reduce((A, item) => A = item, null),status]
}; 

export default useFetch;