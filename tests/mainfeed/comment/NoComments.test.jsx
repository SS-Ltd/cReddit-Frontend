import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import NoComments from "@/Components/mainfeed/comment/NoComments";

describe("NoComments component", () => {
  it("renders NoComments component without crashing", () => {
    render(<NoComments />);
  });
});
