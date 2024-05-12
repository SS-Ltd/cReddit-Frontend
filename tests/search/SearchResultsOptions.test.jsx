import { render, screen } from "@testing-library/react";
import SearchResultsOptions from "@/Components/search/SearchResultsOptions";
import { expect, test, describe } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";

describe("SearchResultsOptions component", () => {
  test("renders search options correctly", () => {
    render(
      <Router>
        <SearchResultsOptions />
      </Router>
    );
    expect(screen.getByText("Posts")).to.exist;
    expect(screen.getByText("Communities")).to.exist;
    expect(screen.getByText("Comments")).to.exist;
    expect(screen.getByText("People")).to.exist;
    expect(screen.getByText("hashtags")).to.exist;
    expect(screen.getByText("Safe Search")).to.exist;
    expect(screen.getByText("Sort by:"));
  });
});
