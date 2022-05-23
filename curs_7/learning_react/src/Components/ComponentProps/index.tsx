import { useState } from "react";
import AlertButton from "./AlertButton";

const ALERT_BUTTONS: {
  id: number;
  buttonText: string;
  alertMessage: string;
}[] = [
  {
    id: 1,
    buttonText: "First Button",
    alertMessage: "Alert of the first button",
  },
  {
    id: 2,
    buttonText: "Second Button",
    alertMessage: "Alert of the second button",
  },
];

export default function ComponentProps(): JSX.Element {
  const [nrOfClicks, setNrOfClicks] = useState(0);

  function onButtonClick() {
    setNrOfClicks((prev) => prev + 1);
  }

  return (
    <>
      <h1>Component's Props</h1>
      <h3>Number of clicks: {nrOfClicks}</h3>

      {ALERT_BUTTONS.map((value) => (
        <AlertButton
          key={value.id}
          text={value.buttonText}
          message={value.alertMessage}
          onClick={onButtonClick}
        />
      ))}
    </>
  );
}
