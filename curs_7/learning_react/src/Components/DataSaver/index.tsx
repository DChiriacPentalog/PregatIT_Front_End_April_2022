import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "data-saver-content";

export default function DataSaver(): JSX.Element {
  const [text, setText] = useState({ message: "", time: Date.now() });

  useEffect(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY) || "";
    setText(value && JSON.parse(value));

    console.log("First render of DataSaver Component");

    return () => {
      console.log("DataSaver Component is destroyed");
    };
  }, []);

  useEffect(() => {
    console.log("New text is DataSaver component is: ", text);

    return () => {
      console.log("Cleanup before displaying new text in DataSaver component");
    };
  }, [text]);

  function onTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setText({ message: e.target.value, time: Date.now() });
  }

  function onSaveBtnClick(): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(text));
  }

  return (
    <>
      <h1>Data Saver</h1>
      <textarea
        rows={5}
        cols={50}
        value={text.message}
        onChange={onTextareaChange}
      />
      <p>Last update: {new Date(text.time).toLocaleTimeString()}</p>
      <button onClick={onSaveBtnClick}>Save</button>
    </>
  );
}
