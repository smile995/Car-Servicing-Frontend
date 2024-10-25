import React from "react";
import { useContext } from "react";
import { CarContextAuth } from "../UseContext/CarContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const { loading, user } = useContext(CarContextAuth);
  const location = useLocation();
  console.log(location);
  
  if (loading) {
   return <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>;
  }
  if(user){
    return children
  }
return <Navigate state={location.pathname} to={'/login'}></Navigate>

};

export default PrivateRoute;
