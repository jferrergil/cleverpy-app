import { Navbar } from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("when component is instantiated...", () => {
  test("render navbar when your logget out", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.getByText("Cleverpy")).toBeInTheDocument();
  });
});

describe("when component is instantpiated...", () => {
  test("render navbar when your logget out", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    fireEvent.click(screen.getByText(/CLEVERPY/i));
  });
});
