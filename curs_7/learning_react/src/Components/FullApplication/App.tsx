import { useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import withApi from "./api";
import { AuthenticationContext } from "./api/authentication";
import { StorageContext } from "./api/storage";
import LogIn from "./components/LogIn";
import UploadImage from "./components/UploadImage";

function App() {
  const { isAuthenticated, logOut } = useContext(AuthenticationContext);
  const { uploading } = useContext(StorageContext);

  return uploading ? (
    <>image is uploaded, please wait...</>
  ) : (
    <>
      <div>
        <Link to="">
          <button>Home</button>
        </Link>
        <Link to="dashboard">
          <button>Dashboard</button>
        </Link>
        <Link to="upload-image">
          <button>Upload image</button>
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
        <Route
          path="upload-image"
          element={isAuthenticated ? <UploadImage /> : <LogIn />}
        />
      </Routes>
    </>
  );
}

export default withApi(App);
