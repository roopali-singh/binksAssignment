import { useEffect, useState } from "react";
import axios from "axios";

function useAxios({ url, pagination }) {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState(null);

  const fetchPaginationData = async () => {
    try {
      const { data } = await axios.get(`${url}&page=${page}`);
      setUserData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setUserData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (pagination) {
      fetchPaginationData();
    } else {
      fetchData();
    }
  }, [page]);

  return { userData, page, setPage };
}

export default useAxios;
