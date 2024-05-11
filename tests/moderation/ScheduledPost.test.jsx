import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ScheduledPost from "@/Components/moderation/ScheduledPost";

afterEach(() => {
  cleanup();
});

describe("ScheduledPost component", () => {
  const props = {
    username: "testuser",
    content: "Test content",
    title: "Test title",
    isSpoiler: false,
    isNsfw: false,
  };

  it("renders correctly with props", () => {
    const { getByText } = render(<ScheduledPost {...props} />);

    expect(getByText("u/testuser")).toBeInTheDocument();
    expect(getByText("Test title")).toBeInTheDocument();
    expect(getByText("Test content")).toBeInTheDocument();
  });

  it("renders spoiler indicator correctly", () => {
    const propsWithSpoiler = {
      ...props,
      isSpoiler: true,
    };

    const { getByText } = render(<ScheduledPost {...propsWithSpoiler} />);

    expect(getByText("Spoiler")).toBeInTheDocument();
  });

  it("renders NSFW indicator correctly", () => {
    const propsWithNsfw = {
      ...props,
      isNsfw: true,
    };

    const { getByText } = render(<ScheduledPost {...propsWithNsfw} />);

    expect(getByText("NSFW")).toBeInTheDocument();
  });
});
