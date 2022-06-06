import { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import withAuthentication, { AuthenticationContext } from "./authentication";

function XYZ() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return <></>;
}

function App() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <>
      <div>
        <Link to="">
          <button>Home</button>
        </Link>
        <Link to="dashboard">
          <button>Dashboard</button>
        </Link>
      </div>

      <br />

      <Routes>
        <Route path="" element={<>Home</>} />
        <Route
          path="dashboard"
          element={isAuthenticated ? <Dashboard /> : <>Login first</>}
        />
      </Routes>
    </>
  );
}

export default withAuthentication(App);
