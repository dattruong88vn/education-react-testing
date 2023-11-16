import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);
    const nameEle = screen.getByRole("textbox");
    expect(nameEle).toBeInTheDocument();

    const jobLocationEle = screen.getByRole("combobox");
    expect(jobLocationEle).toBeInTheDocument();

    const termEle = screen.getByRole("checkbox");
    expect(termEle).toBeInTheDocument();

    const submitBtnEle = screen.getByRole("button");
    expect(submitBtnEle).toBeInTheDocument();
  });
});
