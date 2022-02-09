import { Navbar } from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("When navbar is called", () => {
  test("When you render the navbar", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    expect(screen.queryAllByRole('Link')).toHaveLength(1);
  });
});

describe('when component is instantiated...',() =>{
    test('render navbar when your logget out', () => {
        render(
         < Router>
          <Navbar />
        </Router>,
      );
        expect(screen.getByText('Cleverpy')).toBeInTheDocument();
        
    })
})

describe('when component is instantpiated...',() =>{
    test('render navbar when your logget out', () => {
        render(
         < Router>
          <Navbar />
        </Router>,
      );
        fireEvent.click(screen.getByText(/CLEVERPY/i))
    })
})
