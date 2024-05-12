import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import FloatingInput from "@/Components/settings/components/FloatingInput";

describe("FloatingInput Component", () => {
  it("renders input field, label, and button correctly", () => {
    const id = "test-input";
    const label = "Test Label";
    const buttonText = "Submit";
    const onSubmit = vi.fn();

    render(
      <FloatingInput
        id={id}
        label={label}
        buttonText={buttonText}
        onSubmit={onSubmit}
      />
    );

    const inputElement = screen.getByTestId(id);
    expect(inputElement).toBeInTheDocument();

    const labelElement = screen.getByTestId(`${id}-label`);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent(label);
    expect(labelElement).toHaveAttribute("for", id);

    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("calls onSubmit function with input value when button is clicked", () => {
    const id = "test-input";
    const label = "Test Label";
    const buttonText = "Submit";
    const onSubmit = vi.fn();

    render(
      <FloatingInput
        id={id}
        label={label}
        buttonText={buttonText}
        onSubmit={onSubmit}
      />
    );
  });
});
