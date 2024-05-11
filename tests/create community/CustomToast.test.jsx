import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { CustomToast } from "@/Components/createCommunity/CustomToast";

describe("CustomToast", () => {
  it("renders with the provided message", () => {
    const message = "Test message";

    const { getByText } = render(<CustomToast message={message} />);

    expect(getByText(message)).toBeInTheDocument();
  });
});
