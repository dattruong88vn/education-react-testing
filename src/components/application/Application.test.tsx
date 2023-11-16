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

    const bioEle = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioEle).toBeInTheDocument();

    const jobLocationEle = screen.getByRole("combobox");
    expect(jobLocationEle).toBeInTheDocument();

    const termEle = screen.getByRole("checkbox");
    expect(termEle).toBeInTheDocument();

    const submitBtnEle = screen.getByRole("button");
    expect(submitBtnEle).toBeInTheDocument();
  });
});
