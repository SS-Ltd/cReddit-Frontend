import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RecentRow from "@/Components/mainfeed/RecentRow";

describe("RecentRow component", () => {
  const mockPost = {
    _id: "1",
    type: "Images & Video",
    communityName: "test_community",
    username: "test_user",
    title: "Test Post Title",
    profilePicture: "profile_picture_url",
    content: "image_or_video_url",
    netVote: 100,
    commentCount: 20,
  };

  it("renders RecentRow component with image or video post", () => {
    render(
      <MemoryRouter>
        <RecentRow id={mockPost._id} post={mockPost} />
      </MemoryRouter>
    );
  });
});
