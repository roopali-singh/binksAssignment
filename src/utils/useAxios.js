import { useEffect, useState, useRef } from "react";
import axios from "axios";

function useAxios(url) {
  const cache = useRef({});
  const [data, setData] = useState(null);

  const fetchData = async () => {
    if (cache.current[url]) {
      // console.log(cache.current);
      // console.log(cache.current[url]);
      setData(cache.current[url]);
    } else {
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

export default useAxios;
