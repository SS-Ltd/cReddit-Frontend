import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { CustomToast } from "@/Components/createCommunity/CustomToast";

describe("CustomToast Component", () => {
  it("renders correctly with the provided message", () => {
    const message = "This is a custom toast message";

    render(<CustomToast message={message} />);

    const toastMessage = screen.getByText(message);

    expect(toastMessage).toBeInTheDocument();
  });
});
