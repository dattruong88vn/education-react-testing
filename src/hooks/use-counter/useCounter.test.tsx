import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  const initialCount = 10;
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount,
      },
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment count", async () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decrement count", async () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });

  test("should increment count with initial count", async () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount,
      },
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(initialCount + 1);
  });

  test("should decrement count with initial count", async () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount,
      },
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(initialCount - 1);
  });
});
