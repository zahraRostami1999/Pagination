import axios from "axios";
import { useEffect, useState } from "react";

const useFetchTasksData = (path) => {
    const [data, setData] = useState([]);
     useEffect(() => {
        axios.get(path)
            .then((response) => {
                setData(response.data);
            })
    }, []);

    return data;
}

export default useFetchTasksData;