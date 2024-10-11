import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/Firebase";
const auth = getAuth(app);
export const CarContextAuth = createContext();
const CarContext = ({ children }) => {
  const GlobalData = {
    auth,
  };
  return (
    <CarContextAuth.Provider value={GlobalData}>
      {children}
    </CarContextAuth.Provider>
  );
};

export default CarContext;
