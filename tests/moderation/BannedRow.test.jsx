import { describe, it, expect, afterEach, vi } from "vitest";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BannedRow from "@/Components/moderation/BannedRow";
import { patchRequest } from "@/services/Requests";
import { baseUrl } from "@/constants";

vi.mock("@/services/Requests");

const mockResponse = {
  status: 200,
  data: {
    message: "User unbanned successfully",
  },
};
patchRequest.mockResolvedValue(mockResponse);

afterEach(() => {
  cleanup();
});

describe("BannedRow component", () => {
  it("unbans user when unban button is clicked", async () => {
    const username = "testuser";
    const communityRules = [{ text: "Rule 1" }, { text: "Rule 2" }];
    const profilePicture = "test.jpg";
    const reasonToBan = "Test reason";
    const days = 7;
    const showAlertForTime = vi.fn();
    const selectedSubReddit = { name: "testsubreddit" };
    const setBannedUsers = vi.fn();

    const { getByText } = render(
      <Router>
        <BannedRow
          username={username}
          communityRules={communityRules}
          profilePicture={profilePicture}
          reasonToBan={reasonToBan}
          days={days}
          showAlertForTime={showAlertForTime}
          selectedSubReddit={selectedSubReddit}
          setBannedUsers={setBannedUsers}
        />
      </Router>
    );

    const unbanButton = getByText("Unban");
    fireEvent.click(unbanButton);

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(patchRequest).toHaveBeenCalledWith(
      `${baseUrl}/mod/unban/${selectedSubReddit.name}`,
      {
        username: "testuser",
      }
    );

    expect(showAlertForTime).toHaveBeenCalledWith(
      "success",
      "User unbanned successfully"
    );
  });
});
