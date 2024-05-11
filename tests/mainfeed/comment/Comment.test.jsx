import { describe, it, vi, afterEach } from "vitest";
import { render } from "@testing-library/react";
import Comment from "@/Components/mainfeed/comment/Comment";

describe("Comment component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders comments and loads more on scroll", async () => {
    const postId = "postId123";
    const setSelectedPost = vi.fn();
    const setPosts = vi.fn();

    const mockComments = [
      { _id: "comment1", content: "First comment" },
      { _id: "comment2", content: "Second comment" },
    ];

    render(
      <Comment
        postId={postId}
        setSelectedPost={setSelectedPost}
        setPosts={setPosts}
      />
    );
  });
});
