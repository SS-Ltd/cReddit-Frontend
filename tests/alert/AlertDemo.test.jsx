import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import AlertDemo from "@/Components/alert/AlertDemo";

afterEach(() => {
  cleanup();
});

describe("AlertDemo component", () => {
  const props = {
    condition: "error",
    message: "This is an error message",
    showAlert: true,
  };

  it("renders correctly with error condition", () => {
    const { getByTestId } = render(<AlertDemo {...props} />);
    const alertMessage = getByTestId("alert-message");
  });

  it("renders correctly with success condition", () => {
    const successProps = {
      condition: "success",
      message: "This is a success message",
      showAlert: true,
    };

    const { getByTestId } = render(<AlertDemo {...successProps} />);
    const alertMessage = getByTestId("alert-message");
  });
});
