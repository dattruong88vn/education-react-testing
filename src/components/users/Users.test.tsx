import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { MOCK_DATA_USERS } from "../../mocks/data";

describe("Users", () => {
  test("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(MOCK_DATA_USERS.length);
  });

  test("renders error", async () => {
    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
