import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Timer, Values, Buttons } from "./styled";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

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
    <Timer>
      <h1>Stopwatch</h1>
      <span className="comment">*Laps to be added</span>

      <Values>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </Values>

      <Buttons>
        <Button onClick={start}>
          <PlayCircleIcon />
        </Button>
        <Button onClick={stop}>
          <PauseCircleIcon />
        </Button>
        <Button onClick={reset}>
          <RestartAltIcon />
        </Button>
      </Buttons>
    </Timer>
  );
}
