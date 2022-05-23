import { useEffect, useState } from "react";
import { Timer } from "./styled";

export default function Stopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setTime((prevCount) => prevCount + 10);
      }, 10);
      return () => {
        clearTimeout(time);
      };
    }
  });

  function start() {
    setIsActive(true);
  }
  function stop() {
    setIsActive(false);
  }

  function reset() {
    setIsActive(false);
    setTime(0);
  }

  return (
    <>
      <Timer>
        <div>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</div>
        <div>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</div>
        <div>{("0" + ((time / 10) % 100)).slice(-2)}</div>
      </Timer>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
