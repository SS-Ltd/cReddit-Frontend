import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import SaveComment from "@/Components/mainfeed/comment/SaveComment";
import { Save } from "@/Components/mainfeed/comment/CommentUtils";

vi.mock("@/Components/mainfeed/comment/CommentUtils");

describe("SaveComment component", () => {
  it("renders SaveComment component without crashing", () => {
    const props = {
      id: "commentId123",
      Saved: false,
    };

    render(<SaveComment {...props} />);
  });

  it("handles click to remove from saved", async () => {
    const props = {
      id: "commentId123",
      Saved: true,
    };

    const { getByText } = render(<SaveComment {...props} />);
    fireEvent.click(getByText("Remove from saved"));

    expect(Save).toHaveBeenCalledWith("commentId123", true);
    expect(Save).toHaveBeenCalledTimes(1);
  });
});
