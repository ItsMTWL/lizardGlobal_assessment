import { useState, useEffect } from "react";

const useFetch = (url, id = "") => {
    const [data, setData] = useState(null);
    const [status, setLoadStatus] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data.posts))
            .then(() => setLoadStatus(true)); //sets  true when data successfully loaded
    }, [url]);

    if (!status) return[data,status]    //guard 

    return id === ""?
        [data, status] : 
        [data.filter((item)=>item.id === id)
            .reduce((A, item) => A = item, null),status]
};

export default useFetch;