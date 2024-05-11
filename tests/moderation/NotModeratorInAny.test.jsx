import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import NotModeratorInAny from "@/Components/moderation/NotModeratorInAny";

describe("NotModeratorInAny component", () => {
  it("renders the component with correct text", () => {
    const { getByText, getByAltText } = render(<NotModeratorInAny />);

    const snooImage = getByAltText("Thinking Snoo");
    expect(snooImage).toBeInTheDocument();

    const messageText = getByText("You are not a moderator in any community");
    expect(messageText).toBeInTheDocument();

    const suggestionText = getByText(
      "Become a moderator in a community or create one,"
    );
    expect(suggestionText).toBeInTheDocument();
  });
});
