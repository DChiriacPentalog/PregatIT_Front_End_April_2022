import { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import withAuthentication, { AuthenticationContext } from "./authentication";
import LogIn from "./LogIn";

function App() {
  const { isAuthenticated, logOut } = useContext(AuthenticationContext);

  return (
    <>
      <div>
        <Link to="">
          <button>Home</button>
        </Link>
        <Link to="dashboard">
          <button>Dashboard</button>
        </Link>
        {isAuthenticated && <button onClick={logOut}>Log out</button>}
      </div>

      <br />

      <Routes>
        <Route path="" element={<>Home</>} />
        <Route
          path="dashboard"
          element={isAuthenticated ? <Dashboard /> : <LogIn />}
        />
      </Routes>
    </>
  );
}

export default withAuthentication(App);
