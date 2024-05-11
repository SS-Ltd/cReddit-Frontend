import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import CommunityModeration from "@/Components/viewprofile/CommunityModeration";

describe("CommunityModeration component", () => {
  const props = {
    name: "test_community",
    icon: "https://example.com/icon.png",
    members: 100,
  };

  it("renders correctly with props", () => {
    const { getByText, getByAltText } = render(
      <CommunityModeration {...props} />
    );

    expect(getByText("r/test_community")).toBeInTheDocument();

    expect(getByAltText("test_community")).toBeInTheDocument();

    expect(getByText("100 members")).toBeInTheDocument();
  });
});
