import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("render correctly", () => {
    render(<Application />);

    // h1
    const pageHeading = screen.getByRole("heading", {
      //   name: "Job application form",
      level: 1,
    });

    expect(pageHeading).toBeInTheDocument();

    // h2
    const sectionHeading = screen.getByRole("heading", {
      //   name: "Section 1",
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    // p
    const paragraphEle = screen.getByText("All fields are mandatory", {
      selector: "p",
    });
    expect(paragraphEle).toBeInTheDocument();

    // span
    const closeEle = screen.getByTitle("close");
    expect(closeEle).toBeInTheDocument();

    // img
    const imageEle = screen.getByAltText("a person with a laptop");
    expect(imageEle).toBeInTheDocument();

    // div
    const customeEle = screen.getByTestId("custom-element");
    expect(customeEle).toBeInTheDocument();

    // input name
    const nameEle = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameEle).toBeInTheDocument();

    const nameEle2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameEle2).toBeInTheDocument();

    const nameEle3 = screen.getByPlaceholderText("Fullname");
    expect(nameEle3).toBeInTheDocument();

    const nameEle4 = screen.getByDisplayValue("Thanh Dat");
    expect(nameEle4).toBeInTheDocument();

    // text area bio
    const bioEle = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioEle).toBeInTheDocument();

    // dropdown job location
    const jobLocationEle = screen.getByRole("combobox");
    expect(jobLocationEle).toBeInTheDocument();

    // checkbox
    const termEle = screen.getByRole("checkbox");
    expect(termEle).toBeInTheDocument();

    const termEle2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termEle2).toBeInTheDocument();

    // button submit
    const submitBtnEle = screen.getByRole("button");
    expect(submitBtnEle).toBeInTheDocument();
  });
});
