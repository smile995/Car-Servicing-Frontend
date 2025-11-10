import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.Config";
import axios from "axios";

// const auth = getAuth(app);
export const CarContextAuth = createContext();

const CarContext = ({ children }) => {
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignOut = () => {
    setLoading(false)
    return signOut(auth);
  };
  const userLogIn = (email, password) => {
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const currentUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);  
      setLoading(false)
      const email= currentUser?.email
    //  if(currentUser){
    //   axios.post("https://car-doctor-backend-delta.vercel.app/jwt",{email}, {withCredentials:true})
    //   .then(res=>{
    //     console.log(res.data);
        
    //   })

    //  }
      
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
