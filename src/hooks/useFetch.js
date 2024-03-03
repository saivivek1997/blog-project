import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useFetch = (url, page) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios(url)
      .then((response) => {
        setIsLoading(false);
        setData((prevData) => [...prevData, ...response.data.blogs]);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
        console.log(err, "err.message");
        toast.error(err.message && err.response.data.message);
      });
  }, [url, page]);

  return { data, isLoading, error };
};

export default useFetch;
