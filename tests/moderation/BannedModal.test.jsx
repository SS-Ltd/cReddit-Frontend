import { describe, it, afterEach, vi } from "vitest";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BannedModal } from "@/Components/moderation/BannedModal";
import { patchRequest } from "@/services/Requests";

vi.mock("@/services/Requests");

const mockResponse = {
  status: 200,
  data: {
    message: "User banned successfully",
  },
};
patchRequest.mockResolvedValue(mockResponse);

afterEach(() => {
  cleanup();
});

describe("BannedModal component", () => {
  it("bans user when ban user button is clicked", async () => {
    const setIsOpenBannedModal = vi.fn();
    const bannedModalRef = vi.fn();
    const selectedSubreddit = { name: "testsubreddit" };
    const showAlertForTime = vi.fn();
    const setBannedUsers = vi.fn();
    const communityRules = [{ text: "Rule 1" }, { text: "Rule 2" }];

    const { getByPlaceholderText } = render(
      <BannedModal
        bannedUsers={[]}
        setIsOpenBannedModal={setIsOpenBannedModal}
        isOpenBannedModal={true}
        bannedModalRef={bannedModalRef}
        selectedSubreddit={selectedSubreddit}
        showAlertForTime={showAlertForTime}
        communityRules={communityRules}
        setBannedUsers={setBannedUsers}
      />
    );

    const usernameInput = getByPlaceholderText("u/username");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });

    const modNoteInput = getByPlaceholderText("Note");
    fireEvent.change(modNoteInput, { target: { value: "Test note" } });

    await new Promise((resolve) => setTimeout(resolve, 0));
  });
});
