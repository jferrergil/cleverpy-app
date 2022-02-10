import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("when component is instantiated...", () => {
  test("render navbar when your logget out", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});

describe("when component is instantpiated...", () => {
  test("render navbar when your logget out", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    fireEvent.click(screen.getByText(/Inicio/i));
    fireEvent.click(screen.getByText(/Login/i));
  });
});
