import { render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import DataForm from "./DataForm";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Test DuckForm components", () => {
  test("renders check if there is a button", () => {
    render(
      <MemoryRouter>
        <DataForm />
      </MemoryRouter>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders check if there is option element", () => {
    render(
      <MemoryRouter>
        <DataForm />
      </MemoryRouter>
    );
    const optionElement = screen.queryAllByRole("option").toLocaleString();
    expect(optionElement).toBe(
      `[object HTMLOptionElement],[object HTMLOptionElement],[object HTMLOptionElement],[object HTMLOptionElement]`,
      { exact: false }
    );
  });
});
