import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Statistics from "@/Components/viewprofile/Statistics";

describe("Statistics component", () => {
  const props = {
    views: 1000,
    upvote: 300,
    downvote: 100,
    commentCount: 50,
  };

  it("renders correctly with props", () => {
    const { getByText } = render(<Statistics {...props} />);

    expect(getByText("1000")).toBeInTheDocument();

    expect(getByText("75%")).toBeInTheDocument();

    expect(getByText("50")).toBeInTheDocument();
  });
});
