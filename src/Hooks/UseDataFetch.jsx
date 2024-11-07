import axios from "axios";
import React, { useEffect, useState } from "react";

const UseDataFetch = (url ) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [url]);
  return data;
};

export default UseDataFetch;
