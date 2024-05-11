import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Loading from "@/Components/Loading/Loading";

describe("Loading", () => {
  it("renders correctly", () => {
    render(<Loading />);
  });
});
