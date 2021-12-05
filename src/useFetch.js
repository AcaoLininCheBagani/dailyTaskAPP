import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const useFetch = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const abortCont = new AbortController();
    axios
      .get(url, { signal: abortCont.signal })
      .then((task) => {
        const response = task.data;
        setIsPending(false);
        setData(response);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          nav("/");
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending };
};

export default useFetch;
