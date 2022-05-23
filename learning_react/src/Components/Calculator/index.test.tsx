import React from "react";
import { render, screen } from "@testing-library/react";
import Calculator from "./index";

describe("Counter component", () => {
    test("Stopwatch", () => {
      render(<Calculator />);

      screen.getByText("Calculator");
      screen.getByText("+");
    });
  });
