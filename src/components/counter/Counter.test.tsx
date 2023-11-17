import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import { Counter } from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();

    const amountInput = screen.getByRole("spinbutton");
    expect(amountInput).toBeInTheDocument();

    const setButton = screen.getByRole("button", { name: "Set" });
    expect(setButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after user clicking button", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: /increment/i });
    await user.click(buttonElement);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after user clicking button twice", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", { name: /increment/i });
    await user.dblClick(buttonElement);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking set button", async () => {
    user.setup();
    render(<Counter />);

    const amountInputElement = screen.getByRole("spinbutton");
    await user.type(amountInputElement, "10");
    expect(amountInputElement).toHaveValue(10);

    const setButtonElement = screen.getByRole("button", { name: "Set" });
    await user.click(setButtonElement);
    const countElement = screen.getByRole("heading", { level: 1 });
    expect(countElement).toHaveTextContent("10");
  });

  test("element are focused on right order", async () => {
    user.setup();
    render(<Counter />);

    const incrementButtonElement = screen.getByRole("button", {
      name: /increment/i,
    });
    const amountInputElement = screen.getByRole("spinbutton");
    const setButtonElement = screen.getByRole("button", { name: "Set" });

    await user.tab();
    expect(incrementButtonElement).toHaveFocus();
    await user.tab();
    expect(amountInputElement).toHaveFocus();
    await user.tab();
    expect(setButtonElement).toHaveFocus();
  });
});
