import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./index";

describe("Counter component", () => {
  test("renders", () => {
    render(<Counter />);

    screen.getByText("Counter");
    screen.getByText("Value: 1");
    screen.getByText("increment");
    screen.getByText("multiply");
    screen.getByText("reset");
  });

  test("increments value on increment button click", () => {
    render(<Counter />);

    screen.getByText("Value: 1");

    const button = screen.getByText("increment");
    fireEvent.click(button);

    screen.getByText("Value: 2");

    fireEvent.click(button);

    screen.getByText("Value: 3");
  });

  test("multiplies value on multiply button click", () => {
    render(<Counter />);

    screen.getByText("Value: 1");

    const button = screen.getByText("multiply");
    fireEvent.click(button);

    screen.getByText("Value: 5");
  });

  test("resets value on reset button click", () => {
    render(<Counter />);

    screen.getByText("Value: 1");

    const button = screen.getByText("reset");
    fireEvent.click(button);

    screen.getByText("Value: 0");
  });
});
