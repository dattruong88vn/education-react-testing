/**
 * Greet component render the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet Render", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet render with a name prop", () => {
  render(<Greet name="Thanh Dat" />);
  const textElement = screen.getByText(/thanh dat/i);
  expect(textElement).toBeInTheDocument();
});
