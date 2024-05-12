import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import NoResults from "@/Components/search/NoResults";

describe("NoResults Component", () => {
  it("renders correctly with the provided query", () => {
    const query = "example";

    render(<NoResults query={query} />);

    const queryElement = screen.getByText(`"${query}"`);

    expect(queryElement).toBeInTheDocument();
  });
});
