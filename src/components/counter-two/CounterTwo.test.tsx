import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "./CounterTwo";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );
    const increaseBtn = screen.getByRole("button", { name: "Increment" });
    const decreaseBtn = screen.getByRole("button", { name: "Decrement" });
    await user.click(increaseBtn);
    await user.click(decreaseBtn);
    expect(incrementHandler).toBeCalledTimes(1);
    expect(decrementHandler).toBeCalledTimes(1);
  });
});
