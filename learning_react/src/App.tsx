import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.style.css";
import {Counter, Stopwatch, Calculator, Todos} from "./Components";
import {FiHome } from 'react-icons/fi'
import {MdOutlineTimer} from 'react-icons/md';
import {AiOutlineFieldNumber, AiOutlineCalculator} from 'react-icons/ai'
import {RiCalendarTodoLine} from 'react-icons/ri'

export enum AppRoutes {
  home = "/",
  counter = "/counter",
  stopwatch = "/stopwatch",
  calc = "/calc",
  todo = "/todo",
  dashboard = "/dashboard"
}

export default function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <nav>
          <ul>
            <Link to={AppRoutes.home}>
             <FiHome/> <li> Home</li>
            </Link>
            <Link to={AppRoutes.counter}>
              <AiOutlineFieldNumber/><li> Counter</li>
            </Link>
            <Link to={AppRoutes.stopwatch}>
              <MdOutlineTimer/><li>Stopwatch</li>
            </Link>
            <Link to={AppRoutes.calc}>
              <AiOutlineCalculator/><li>Calculator</li>
            </Link>
            <Link to={AppRoutes.todo}>
              <RiCalendarTodoLine/><li>Todo</li>
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
            <Route path={AppRoutes.calc} element={<Calculator />} />
            <Route path={AppRoutes.todo} element={<Todos />} />
            <Route path={AppRoutes.dashboard} element={<h1>Dashboard</h1>} />s
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
