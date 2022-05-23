type AlertButtonComponentProps = {
  text: string;
  message: string;
  onClick: () => void;
};

export default function AlertButton({
  text,
  message,
  onClick,
}: AlertButtonComponentProps): JSX.Element {
  function onButtonClick() {
    alert(message);
    onClick();
  }

  return <button onClick={onButtonClick}>{text}</button>;
}
