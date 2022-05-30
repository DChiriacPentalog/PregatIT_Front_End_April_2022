import { useContext, useEffect, useMemo, useRef } from "react";
import { DashboardContext } from "..";

export default function DisplayPanel(): JSX.Element {
  const { state } = useContext(DashboardContext);

  let count = 0;
  const countRef = useRef(0);

  useEffect(() => {
    count++;
    countRef.current++;
  }, [state.version]);

  const uppercaseLevel = useMemo(() => {
    console.log("uppercaseLevel got computed");

    return (state.level || "").toUpperCase();
  }, [state.level]);

  return (
    <div>
      <h1>DisplayPanel</h1>
      <p>This is version: {state.version}</p>
      <p>With level: {state.level ? state.level : "no set"}</p>
      <p>UPPERCASE level: {uppercaseLevel}</p>
      <br />
      <p>
        count: {count}, countRef: {countRef.current}
      </p>
      <button onClick={() => countRef.current++}>increment countRef</button>
    </div>
  );
}
