import { MuiMode } from "./MuiMode";
import { render, screen } from "../../test-utils";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />);
    const headingText = screen.getByRole("heading", { name: /dark mode/i });
    expect(headingText).toHaveTextContent("dark mode");
  });
});
