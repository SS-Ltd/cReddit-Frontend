import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Queue from "@/Components/moderation/Queue";

describe("Queue component", () => {
  it("renders the component with loading state", () => {
    const selectedSubReddit = { name: "test", icon: "test-icon" };
    render(<Queue selectedSubReddit={selectedSubReddit} />);
  });
});
