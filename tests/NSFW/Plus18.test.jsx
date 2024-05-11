import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Plus18 from "@/Components/NSFW/Plus18";

describe("Plus18", () => {
  it("renders correctly", () => {
    render(<Plus18 />);
  });
});
