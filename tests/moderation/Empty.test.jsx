import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Empty from "@/Components/moderation/Empty";

describe("Empty component", () => {
  it("renders with the provided message", () => {
    const message = "Test message";
    const { getByText } = render(<Empty message={message} />);

    expect(getByText(message)).toBeInTheDocument();
  });
});
