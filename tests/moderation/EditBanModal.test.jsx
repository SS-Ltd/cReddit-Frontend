import { describe, it, expect, afterEach, vi } from "vitest";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { EditBanModal } from "@/Components/moderation/EditBanModal";
import { patchRequest } from "@/services/Requests";
import "@testing-library/jest-dom/vitest";
import { baseUrl } from "@/constants";

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

describe("EditBanModal component", () => {
  const props = {
    username: "testuser",
    setIsOpenBannedModal: vi.fn(),
    bannedModalRef: vi.fn(),
    selectedSubreddit: { name: "testsubreddit" },
    showAlertForTime: vi.fn(),
    communityRules: [{ text: "Rule 1" }, { text: "Rule 2" }],
    setBannedUsers: vi.fn(),
  };

  it("successfully bans user with valid inputs", async () => {
    const { getByText, getByPlaceholderText } = render(
      <EditBanModal {...props} />
    );

    fireEvent.change(getByPlaceholderText("Note"), {
      target: { value: "Test mod note" },
    });

    fireEvent.click(getByText("Edit Ban"));

    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  it("displays error message with invalid inputs", async () => {
    const { getByText } = render(<EditBanModal {...props} />);

    fireEvent.click(getByText("Edit Ban"));

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(patchRequest).not.toHaveBeenCalled();

    expect(props.setIsOpenBannedModal).not.toHaveBeenCalled();
  });
});
