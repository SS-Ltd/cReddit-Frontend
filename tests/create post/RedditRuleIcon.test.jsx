import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import RedditRuleIcon from "@/Components/create_post/RedditRuleIcon";

describe("RedditRuleIcon", () => {
  it("renders correctly", () => {
    const iconUrl = "https://example.com/icon.png";
    render(<RedditRuleIcon iconUrl={iconUrl} />);
  });
});
