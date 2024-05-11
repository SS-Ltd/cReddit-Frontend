import { describe, it, vi, afterEach } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import CommentSection from "@/Components/mainfeed/comment/CommentSection";

describe("CommentSection component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders CommentSection component without crashing", () => {
    const postId = "postId123";
    const setIsCommenting = vi.fn();
    const setPostComments = vi.fn();
    const setIsPaginationLoading = vi.fn();
    const setLoadingAddComment = vi.fn();
    const setSelectedPost = vi.fn();
    const setPosts = vi.fn();

    render(
      <CommentSection
        postId={postId}
        isCommenting={true}
        setIsCommenting={setIsCommenting}
        setPostComments={setPostComments}
        setIsPaginationLoading={setIsPaginationLoading}
        setLoadingAddComment={setLoadingAddComment}
        setSelectedPost={setSelectedPost}
        setPosts={setPosts}
      />
    );
  });
});
