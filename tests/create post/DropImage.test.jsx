import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import DropImage from "@/Components/create_post/DropImage";

describe("DropImage component", () => {
  let handleFileChangeMock;

  beforeEach(() => {
    handleFileChangeMock = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders correctly without preview image", () => {
    const { getByText } = render(
      <DropImage id="dropzone" handleFileChange={handleFileChangeMock} />
    );

    expect(getByText("Drag and Drop or Upload")).toBeInTheDocument();
  });

  it("renders correctly with preview image", () => {
    const { getByAltText } = render(
      <DropImage
        id="dropzone"
        handleFileChange={handleFileChangeMock}
        userProfilePicture="profile_picture.jpg"
      />
    );

    expect(getByAltText("preview")).toBeInTheDocument();
  });
});
