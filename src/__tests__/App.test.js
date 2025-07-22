import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("renders Quiz Admin header", () => {
  render(<App />);
  const header = screen.getByText(/quiz admin/i);
  expect(header).toBeInTheDocument();
});
