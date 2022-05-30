import { useContext } from "react";
import { DashboardContext } from "..";

export default function ButtonsPanel(): JSX.Element {
  const { state, updateVersion } = useContext(DashboardContext);

  return (
    <div>
      <h1>Buttons Panel</h1>
      <button
        disabled={state.version === "A"}
        onClick={() => updateVersion("A")}
      >
        Version A
      </button>
      <button
        disabled={state.version === "B"}
        onClick={() => updateVersion("B")}
      >
        Version B
      </button>
    </div>
  );
}
