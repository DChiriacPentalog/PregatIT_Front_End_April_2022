import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "..";

export const AuthenticationContext = createContext({
  isAuthenticated: false,
  logIn: () => {},
  logOut: () => {},
});

export default function withAuthentication(Component: React.FC): React.FC {
  const auth = getAuth(app);

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
