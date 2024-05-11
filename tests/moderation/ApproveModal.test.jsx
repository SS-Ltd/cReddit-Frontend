import { describe, it, expect, afterEach, vi } from "vitest";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ApproveModal } from "@/Components/moderation/ApproveModal";
import { patchRequest } from "@/services/Requests";
import { baseUrl } from "@/constants";

vi.mock("@/services/Requests");

const mockResponse = {
  status: 200,
  data: {
    message: "User approved successfully",
  },
};
patchRequest.mockResolvedValue(mockResponse);

afterEach(() => {
  cleanup();
});

describe("ApproveModal component", () => {
  it("approves user when approve button is clicked", async () => {
    const setIsOpenApproveModal = vi.fn();
    const approveModalRef = vi.fn();
    const selectedSubreddit = { name: "testsubreddit" };
    const showAlertForTime = vi.fn();
    const setApprovedUsers = vi.fn();

    const { getByText, getByPlaceholderText } = render(
      <ApproveModal
        setIsOpenApproveModal={setIsOpenApproveModal}
        approveModalRef={approveModalRef}
        selectedSubreddit={selectedSubreddit}
        showAlertForTime={showAlertForTime}
        setApprovedUsers={setApprovedUsers}
      />
    );

    const usernameInput = getByPlaceholderText("Username");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });

    const approveButton = getByText("Approve");
    fireEvent.click(approveButton);

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(patchRequest).toHaveBeenCalledWith(
      `${baseUrl}/mod/approve/${selectedSubreddit.name}`,
      {
        username: "testuser",
      }
    );

    expect(showAlertForTime).toHaveBeenCalledWith(
      "success",
      "User approved successfully"
    );

    expect(setIsOpenApproveModal).toHaveBeenCalledWith(false);
  });
});
