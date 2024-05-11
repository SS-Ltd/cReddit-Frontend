import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import QueueRow from "@/Components/moderation/QueueRow";

describe("QueueRow component", () => {
  it("renders the component with post data", () => {
    const post = {
      username: "testuser",
      createdAt: "2024-05-11T12:00:00Z",
      netVote: 10,
      commentCount: 5,
      title: "Test Post",
      content: "This is a test post.",
      type: "Text",
      isNSFW: false,
      isSpoiler: false,
      isLocked: false,
      isApproved: false,
      isRemoved: false,
      _id: "123456",
      userPic: "test-pic",
    };

    const { getByText } = render(<QueueRow post={post} />);

    expect(getByText(/u\/testuser/)).toBeInTheDocument();
    expect(getByText(/5 comments/)).toBeInTheDocument();
    expect(getByText(/Test Post/)).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const post = {
      _id: "123456",
      isLocked: false,
    };

    render(<QueueRow post={post} />);
  });
});
