import { describe, it, expect, afterEach, vi } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/vitest";
import ApprovedRow from "@/Components/moderation/ApprovedRow";
import { patchRequest } from "@/services/Requests";
import { baseUrl } from "@/constants";

vi.mock("@/services/Requests");

const mockResponse = {
  status: 200,
  data: {
    message: "User removed successfully",
  },
};
patchRequest.mockResolvedValue(mockResponse);

afterEach(() => {
  cleanup();
});

describe("ApprovedRow component", () => {
  it("removes user when remove button is clicked", async () => {
    const username = "testuser";
    const profilePicture = "testprofile.jpg";
    const showAlertForTime = vi.fn();
    const setApprovedUsers = vi.fn();
    const selectedSubReddit = { name: "testsubreddit" };

    const { getByText } = render(
      <Router>
        <ApprovedRow
          username={username}
          profilePicture={profilePicture}
          showAlertForTime={showAlertForTime}
          setApprovedUsers={setApprovedUsers}
          selectedSubReddit={selectedSubReddit}
        />
      </Router>
    );

    getByText("Remove").click();

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(patchRequest).toHaveBeenCalledWith(
      `${baseUrl}/mod/unapprove/${selectedSubReddit.name}`,
      {
        username: username,
      }
    );

    expect(showAlertForTime).toHaveBeenCalledWith(
      "success",
      "User removed successfully"
    );
  });
});
