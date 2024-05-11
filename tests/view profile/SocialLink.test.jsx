import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import SocialLink from "@/Components/viewprofile/SocialLink";

describe("SocialLink component", () => {
  const props = {
    platform: "Twitter",
    url: "https://twitter.com/example",
  };

  it("renders correctly with props", () => {
    const { getByText, getByRole } = render(<SocialLink {...props} />);

    expect(getByText("Twitter")).toBeInTheDocument();

    const anchorElement = getByRole("link");
    expect(anchorElement).toHaveAttribute(
      "href",
      "https://twitter.com/example"
    );

    expect(anchorElement).toHaveClass(
      "px-[10px] items-center justify-center rounded-full cursor-pointer inline-flex bg-[#1A282D] py-[8px] hover:bg-gray-700"
    );
  });
});
