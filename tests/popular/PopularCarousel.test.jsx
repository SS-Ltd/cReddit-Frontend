import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import PopularCarousel from "@/Components/popular/PopularCarousel";
import { BrowserRouter as Router } from "react-router-dom";

describe("PopularCarousel Component", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <PopularCarousel />
      </Router>
    );
  });
});
