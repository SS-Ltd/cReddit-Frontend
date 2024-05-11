import { describe, it, expect, vi, afterEach } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import DropCommentImage from "@/Components/mainfeed/comment/DropCommentImage";

describe("DropCommentImage component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders DropCommentImage component without crashing", () => {
    const handleFileChange = vi.fn();
    render(<DropCommentImage handleFileChange={handleFileChange} />);
  });
});
