import axios from "axios";
import { useEffect, useState } from "react";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const UseDataFetch = (url) => {
  const { userSignOut } = useAuthContext();
  const navigate= useNavigate()
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        if (error.response.status) {
          userSignOut()
          .then(()=>{
            navigate('/login')
          }
          );
        }
      });
  }, [url]);
  return data;
};

export default UseDataFetch;
