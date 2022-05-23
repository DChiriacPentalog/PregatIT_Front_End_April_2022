import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.style.css";
import Counter from "./Components/Counter";
import Stopwatch from "./Components/Stopwatch";

export enum AppRoutes {
  home = "/",
  counter = "/counter",
  stopwatch = "/stopwatch",
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
            <Link to={AppRoutes.stopwatch}>
              <li>Stopwatch</li>
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
            <Route path={AppRoutes.stopwatch} element={<Stopwatch />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
