import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
  window.submitAPI = jest.fn(() => true);
});

test("renders Little Lemon app", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const headingElement = screen.getByRole("heading", {
    name: "Little Lemon",
    level: 1,
  });

  expect(headingElement).toBeInTheDocument();
});