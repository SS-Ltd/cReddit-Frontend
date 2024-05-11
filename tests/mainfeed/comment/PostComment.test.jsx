import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import moment from "moment";
import PostComment from "@/Components/mainfeed/comment/PostComment";

describe("PostComment component", () => {
  it("renders PostComment component without crashing", () => {
    const props = {
      id: "commentId123",
      postId: "postId123",
      isImage: false,
      username: "testUser",
      content: "This is a test comment.",
      createdAt: moment().subtract(1, "day").toISOString(),
      netVote: 5,
      isUpvoted: true,
      isDownvoted: false,
      profilePicture: "profile-picture-url",
      isSaved: false,
      testId: "test-comment",
    };

    render(<PostComment {...props} />);
  });
});
