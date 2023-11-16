import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", {
      //   name: "Job application form",
      level: 1,
    });

    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      //   name: "Section 1",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameEle = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameEle).toBeInTheDocument();

    const nameEle2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameEle2).toBeInTheDocument();

    const bioEle = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioEle).toBeInTheDocument();

    const jobLocationEle = screen.getByRole("combobox");
    expect(jobLocationEle).toBeInTheDocument();

    const termEle = screen.getByRole("checkbox");
    expect(termEle).toBeInTheDocument();

    const termEle2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termEle2).toBeInTheDocument();

    const submitBtnEle = screen.getByRole("button");
    expect(submitBtnEle).toBeInTheDocument();
  });
});
