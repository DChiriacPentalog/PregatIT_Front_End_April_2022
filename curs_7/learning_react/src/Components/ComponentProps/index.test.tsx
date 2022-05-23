import React from "react";
import { render, screen } from "@testing-library/react";
import ComponentProps from "./index";
import * as AlertButton from "./AlertButton";
import { act } from "react-dom/test-utils";

const alertButtonSpy = jest.spyOn(AlertButton, "default");

describe("ComponentProps component", () => {
  beforeEach(() => {
    alertButtonSpy.mockImplementation(({ text }) => <button>{text}</button>);
  });

  test("renders", () => {
    render(<ComponentProps />);

    screen.getByText("ComponentProps");
    screen.getByText("Number of clicks: 0");
    screen.getByText("First Button");
    screen.getByText("Second Button");
  });

  test("Number of clicks increases by 1", () => {
    render(<ComponentProps />);

    const args = alertButtonSpy.mock.calls.pop()?.[0];
    act(() => args?.onClick());

    screen.getByText("Number of clicks: 1");

    act(() => args?.onClick());

    screen.getByText("Number of clicks: 2");
  });
});
