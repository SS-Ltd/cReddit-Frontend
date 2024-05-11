import { describe, it, expect, afterEach, vi } from "vitest";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import SchedulePost from "@/Components/moderation/SchedulePost";
import { getRequest } from "@/services/Requests";
import { baseUrl } from "@/constants";

vi.mock("@/services/Requests");

const mockResponse = {
  status: 200,
  data: [
    {
      username: "testuser",
      profilePicture: "test.jpg",
      content: "Test content",
      title: "Test title",
      isSpoiler: false,
      isNsfw: false,
    },
  ],
};

getRequest.mockResolvedValue(mockResponse);

afterEach(() => {
  cleanup();
});

describe("SchedulePost component", () => {
  const selectedSubReddit = { name: "test_subreddit" };

  it("fetches scheduled posts and renders correctly", async () => {
    const { findByText } = render(
      <SchedulePost selectedSubReddit={selectedSubReddit} />
    );

    const titleElement = await findByText("Test title");
    const contentElement = await findByText("Test content");

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
    expect(getRequest).toHaveBeenCalledWith(
      `${baseUrl}/subreddit/${selectedSubReddit.name}/scheduled-posts`
    );
  });
});
