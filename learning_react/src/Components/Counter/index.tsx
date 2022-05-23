import { useState } from "react";
import "./index.style.css";

export default function Counter() {
  const [count, setCount] = useState(1);

  function incrementCount() {
    setCount((prev) => increment(prev));
  }

  function multiplyCount() {
    setCount((prev) => multiplyCountBy(prev, 5));
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <>
      <h1>Counter</h1>
      <h3>Value: {count}</h3>
      <div className="counter__button-container">
        <button onClick={incrementCount}>increment</button>
        <button onClick={multiplyCount}>multiply</button>
        <button onClick={resetCount}>reset</button>
      </div>
    </>
  );
}

function increment(value: number): number {
  return value + 1;
}

function multiplyCountBy(value: number, ammount: number): number {
  return value * ammount;
}
