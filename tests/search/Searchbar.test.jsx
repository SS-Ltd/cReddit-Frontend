import { render, fireEvent } from "@testing-library/react";
import Searchbar from "@/Components/search/Searchbar";
import { expect, test, describe, it } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";

describe("Searchbar component", () => {
  it("updates search value when typing", () => {
    const { getByPlaceholderText } = render(
      <Router>
        <Searchbar />
      </Router>
    );

    const input = getByPlaceholderText("Search in Reddit");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });
});
