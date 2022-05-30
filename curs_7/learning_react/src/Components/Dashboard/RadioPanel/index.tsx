import { useContext } from "react";
import { DashboardContext } from "..";

export default function RadioPanel(): JSX.Element {
  const { state, updateLevel } = useContext(DashboardContext);

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    updateLevel(e.target.value);
  }

  return (
    <div>
      <h1>Radio Panel</h1>
      <fieldset>
        <legend>Settings:</legend>

        {[
          { id: "Level1", label: "Level 1" },
          { id: "Level2", label: "Level 2" },
          { id: "Level3", label: "Level 3" },
        ].map((value) => (
          <div key={value.id}>
            <input
              key={value.id}
              type="radio"
              id={value.id}
              name="Settings"
              value={value.id}
              checked={state.level === value.id}
              onChange={onChange}
            />
            <label htmlFor={value.id}>{value.label}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
