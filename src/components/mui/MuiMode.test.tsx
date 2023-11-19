import { render, screen } from "@testing-library/react";
import { MuiMode } from "./MuiMode";
import { AppProviders } from "../../providers/app-providers";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />, { wrapper: AppProviders });
    const headingText = screen.getByRole("heading", { name: /dark mode/i });
    expect(headingText).toHaveTextContent("dark mode");
  });
});
