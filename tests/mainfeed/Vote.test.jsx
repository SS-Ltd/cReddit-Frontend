import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Vote from "@/Components/mainfeed/Vote";

describe("Vote component", () => {
  it("renders Vote component without crashing", () => {
    const mockProps = {
      id: "post_id",
      netVotes: 10,
      isUpvoted: false,
      isDownvoted: false,
      setPosts: vi.fn(),
    };

    const { getByText } = render(<Vote {...mockProps} />);

    expect(getByText("10")).toBeInTheDocument();
  });
});
