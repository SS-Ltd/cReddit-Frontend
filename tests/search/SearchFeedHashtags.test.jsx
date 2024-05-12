import { render } from "@testing-library/react";
import SearchFeedHashtags from "@/Components/search/SearchFeedHashtags";
import { it, expect, describe } from "vitest";
import { MemoryRouter as Router } from "react-router-dom";

describe("SearchFeedHashtags", () => {
  it("renders without crashing", () => {
    const mockProps = {
      _id: "1",
      postID: "1",
      postTitle: "Test Title",
      postUsername: "TestUser",
      postVotes: 10,
      postPicture: "https://example.com/test.jpg",
      postCreatedAt: new Date(),
      isPostNsfw: false,
      isPostSpoiler: false,
      communityName: "TestCommunity",
      createdAt: new Date(),
      username: "TestUser",
      netVote: 5,
      commentCount: 2,
      commentPicture: "https://example.com/test.jpg",
      content: "Test content",
      type: "Comment",
      lastElementRef: null,
    };

    const { container } = render(
      <Router>
        <SearchFeedHashtags {...mockProps} />
      </Router>
    );
    expect(container).toBeTruthy();
  });
});
