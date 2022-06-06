import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext({
  isAuthenticated: false,
  logIn: () => {},
  logOut: () => {},
});

export default function withAuthentication(Component: React.FC): React.FC {
  return function AuthenticationStore() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function logIn(): void {
      setIsAuthenticated(true);
    }

    function logOut(): void {
      setIsAuthenticated(false);
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
