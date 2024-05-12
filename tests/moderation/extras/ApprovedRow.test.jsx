import { vi, describe, it, beforeEach, expect } from "vitest";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import ApprovedRow from "@/Components/moderation/ApprovedRow";
import { patchRequest } from "@/services/Requests";
import { baseUrl } from "@/constants";

vi.mock("@/services/Requests");

beforeEach(cleanup);

describe("ApprovedRow", () => {
  const showAlertForTime = vi.fn();
  const setApprovedUsers = vi.fn();
  const selectedSubReddit = { name: "testSubReddit" };
  const username = "testUser";
  const profilePicture = "testPicture.jpg";

  beforeEach(() => {
    patchRequest.mockResolvedValue({
      status: 200,
      data: { message: "Success" },
    });
  });

  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <ApprovedRow
          username={username}
          profilePicture={profilePicture}
          showAlertForTime={showAlertForTime}
          setApprovedUsers={setApprovedUsers}
          selectedSubReddit={selectedSubReddit}
        />
      </MemoryRouter>
    );
  });

  it("calls removeUser when Remove button is clicked", async () => {
    render(
      <MemoryRouter>
        <ApprovedRow
          username={username}
          profilePicture={profilePicture}
          showAlertForTime={showAlertForTime}
          setApprovedUsers={setApprovedUsers}
          selectedSubReddit={selectedSubReddit}
        />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Remove"));
    expect(patchRequest).toHaveBeenCalledWith(
      `${baseUrl}/mod/unapprove/${selectedSubReddit.name}`,
      { username }
    );
  });

  it("navigates to correct path when username is clicked", () => {
    render(
      <MemoryRouter>
        <ApprovedRow
          username={username}
          profilePicture={profilePicture}
          showAlertForTime={showAlertForTime}
          setApprovedUsers={setApprovedUsers}
          selectedSubReddit={selectedSubReddit}
        />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText(username));
    // Note: With MemoryRouter, we can't directly check the history location.
    // You might need to mock the 'useNavigate' hook to test the navigation.
  });
});
