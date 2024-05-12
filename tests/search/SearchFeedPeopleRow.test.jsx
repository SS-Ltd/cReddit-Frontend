import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import SearchFeedPeopleRow from "@/Components/search/SearchFeedPeopleRow";

describe("SearchFeedPeopleRow", () => {
  test("renders correctly", async () => {
    const { getByText } = render(
      <Router>
        <SearchFeedPeopleRow
          username="test"
          about="test about"
          profilePicture="test picture"
          isNSFW={false}
          lastElementRef={null}
        />
      </Router>
    );

    expect(getByText("u/test")).to.exist;
    expect(getByText("test about")).to.exist;
  });
});
