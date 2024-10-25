import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.Config";

// const auth = getAuth(app);
export const CarContextAuth = createContext();

const CarContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoadibg] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignOut = () => {
    return signOut(auth);
  };
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const currentUser = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      return currentUser();
    };
  }, []);


  const GlobalData = {
    createUser,
    user,
    loading,
    setUser,
    userSignOut,
    userLogIn,
    
  };
  return (
    <CarContextAuth.Provider value={GlobalData}>
      {children}
    </CarContextAuth.Provider>
  );
};

export default CarContext;
