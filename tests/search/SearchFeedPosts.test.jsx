import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import SearchFeedPosts from "@/Components/search/SearchFeedPosts";

describe("SearchFeedPosts", () => {
  test("renders correctly", async () => {
    const { getByText } = render(
      <Router>
        <SearchFeedPosts
          communityName="testCommunity"
          username="testUser"
          profilePicture="testPicture"
          netVote={1000}
          commentCount={200}
          createdAt={new Date()}
          title="Test Title"
          content="Test Content"
          isSpoiler={false}
          isNSFW={false}
          type="Images & Video"
          lastElementRef={null}
          _id="testId"
        />
      </Router>
    );

    expect(getByText("r/testCommunity")).to.exist;
    expect(getByText("Test Title")).to.exist;
    expect(getByText("1.0K votes")).to.exist;
    expect(getByText("200 comments")).to.exist;
  });

  test("renders correctly when communityName is null", async () => {
    const { getByText, queryByText } = render(
      <Router>
        <SearchFeedPosts
          communityName={null}
          username="testUser2"
          profilePicture="testPicture"
          netVote={2010}
          commentCount={100}
          createdAt={new Date()}
          title="Test Title2"
          content="Test Content"
          isSpoiler={false}
          isNSFW={false}
          type="Images & Video"
          lastElementRef={null}
          _id="testId"
        />
      </Router>
    );

    expect(getByText("u/testUser2")).to.exist;
    expect(getByText("Test Title2")).to.exist;
    expect(getByText("2.0K votes")).to.exist;
    expect(getByText("100 comments")).to.exist;
  });
});
