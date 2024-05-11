import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup, fireEvent } from "@testing-library/react";
import CommunityMod from "@/Components/moderation/CommunityMod";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

describe("CommunityMod component", () => {
  const props = {
    text: "Community Name",
    divId: "community-id",
    icon: "community-icon-url.png",
    Selected: { name: "Selected Community" },
  };

  it("renders correctly with props", () => {
    const { getByTestId, getByText } = render(<CommunityMod {...props} />);

    expect(getByText("Community Name")).toBeInTheDocument();
    expect(getByTestId("community-id")).toHaveClass("hover:bg-reddit_hover");
  });

  it("updates selection state when clicked", () => {
    const { getByTestId } = render(<CommunityMod {...props} />);

    fireEvent.click(getByTestId("community-id"));
  });
});
