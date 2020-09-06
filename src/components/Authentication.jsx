import React, { useState, useEffect } from "react";

import CurrentUser from "./CurrentUser";
import SignInAndSignUp from "./SignInAndSignUp";
import { auth } from "../firebase";

const Authentication = ({ loading }) => {
  console.log("authentication");

  if (loading) return null;

  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        const _user = {
          uid,
          displayName,
          email,
          photoURL,
        };
        setUser(_user);
      } else {
        debugger;
      }
    });
    return () => unsubscribeFromAuth();
  }, []);

  return <div>{user ? <CurrentUser {...user} /> : <SignInAndSignUp />}</div>;
};

export default Authentication;
