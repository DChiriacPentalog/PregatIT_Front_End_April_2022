import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.style.css";
import ComponentProps from "./Components/ComponentProps";
import Counter from "./Components/Counter";
import Dashboard from "./Components/Dashboard";
import DataSaver from "./Components/DataSaver";

export enum AppRoutes {
  home = "/",
  counter = "/counter",
  ComponentProps = "/ComponentProps",
  DataSaver = "/DataSaver",
  Dashboard = "/Dashboard",
}

export default function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <nav>
          <ul>
            <Link to={AppRoutes.home}>
              <li>Home</li>
            </Link>
            <Link to={AppRoutes.counter}>
              <li>Counter</li>
            </Link>
            <Link to={AppRoutes.ComponentProps}>
              <li>Component's Props</li>
            </Link>
            <Link to={AppRoutes.DataSaver}>
              <li>Data Saver</li>
            </Link>
            <Link to={AppRoutes.Dashboard}>
              <li>Dashboard</li>
            </Link>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route
              path={AppRoutes.home}
              element={<h1>Please select a project from the left side</h1>}
            />
            <Route path={AppRoutes.counter} element={<Counter />} />
            <Route
              path={AppRoutes.ComponentProps}
              element={<ComponentProps />}
            />
            <Route path={AppRoutes.DataSaver} element={<DataSaver />} />
            <Route path={AppRoutes.Dashboard} element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
