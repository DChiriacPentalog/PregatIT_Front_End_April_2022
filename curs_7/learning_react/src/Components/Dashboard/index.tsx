import { createContext, useState } from "react";
import ButtonsPanel from "./ButtonsPanel";
import DisplayPanel from "./DisplayPanel";
import RadioPanel from "./RadioPanel";
import "./style.css";

function getInitialState(): { version: "A" | "B"; level: string | null } {
  return {
    version: "A",
    level: null,
  };
}

export const DashboardContext = createContext({
  state: getInitialState(),
  updateVersion: (version: "A" | "B") => {},
  updateLevel: (level: string | null) => {},
});

export default function Dashboard(): JSX.Element {
  const [state, setState] = useState(getInitialState());

  function updateVersion(version: "A" | "B"): void {
    setState((prev) => ({ ...prev, version }));
  }

  function updateLevel(level: string | null): void {
    setState((prev) => ({ ...prev, level }));
  }

  return (
    <DashboardContext.Provider value={{ state, updateVersion, updateLevel }}>
      <h1>Dashboard</h1>
      <section className="dashboard__root-container">
        <ButtonsPanel />
        <RadioPanel />
        <DisplayPanel />
      </section>
    </DashboardContext.Provider>
  );
}
