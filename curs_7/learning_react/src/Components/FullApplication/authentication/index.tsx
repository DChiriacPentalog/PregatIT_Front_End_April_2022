import React, { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzLtHb1CQLcYyy-GSJgd-MMU-2LQkWz2o",
  authDomain: "fullapplication-65891.firebaseapp.com",
  projectId: "fullapplication-65891",
  storageBucket: "fullapplication-65891.appspot.com",
  messagingSenderId: "1000318969548",
  appId: "1:1000318969548:web:e40a12e1a480e27a7e8469",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const AuthenticationContext = createContext({
  isAuthenticated: false,
  logIn: () => {},
  logOut: () => {},
});

export default function withAuthentication(Component: React.FC): React.FC {
  return function AuthenticationStore() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      return onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      });
    }, []);

    function logIn(): void {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider).catch((error) => {
        alert(error);
      });
    }

    function logOut(): void {
      signOut(auth).catch((error) => {
        alert(error);
      });
    }

    return (
      <AuthenticationContext.Provider
        value={{ isAuthenticated, logIn, logOut }}
      >
        <Component />
      </AuthenticationContext.Provider>
    );
  };
}
