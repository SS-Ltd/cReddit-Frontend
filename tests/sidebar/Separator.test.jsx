import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Separator from "@/Components/sidebar/Nav-Icons/Separator";

describe("Separator Component", () => {
  it("renders separator", () => {
    render(<Separator />);
  });
});
