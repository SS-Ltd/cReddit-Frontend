import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Share from "@/Components/mainfeed/Share";

describe("Share component", () => {
  it("renders Share component without crashing", () => {
    const setIsShareMenuOpenedMock = vi.fn();

    const { getByText } = render(
      <Share id="post_id" setIsShareMenuOpened={setIsShareMenuOpenedMock} />
    );

    expect(getByText("Share")).toBeInTheDocument();

    fireEvent.click(getByText("Share"));

    expect(setIsShareMenuOpenedMock).toHaveBeenCalled();
  });
});
