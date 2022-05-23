import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AlertButton from "./index";

describe("AlertButton component", () => {
  const text = "My Button";
  const message = "This is my message";
  const onClick = jest.fn();
  const alert = jest.fn();

  beforeAll(() => {
    window.alert = alert;
  });

  test("renders", () => {
    render(<AlertButton text={text} message={message} onClick={onClick} />);

    screen.getByText(text);
  });

  test("calls alert with correct message on button click", () => {
    render(<AlertButton text={text} message={message} onClick={onClick} />);

    const button = screen.getByText(text);
    fireEvent.click(button);

    expect(alert).toHaveBeenCalledWith(message);
  });

  test("calls onClick prop on button click", () => {
    render(<AlertButton text={text} message={message} onClick={onClick} />);

    const button = screen.getByText(text);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
