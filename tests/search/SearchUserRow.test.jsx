import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import SearchUserRow from "@/Components/search/SearchUserRow";

describe("SearchUserRow", () => {
  test("renders correctly", async () => {
    const { getByText } = render(
      <Router>
        <SearchUserRow
          _id="testId"
          username="testUser"
          profilePicture="testPicture"
          isNSFW={false}
          setSearchHistory={() => {}}
          setIsFocused={() => {}}
        />
      </Router>
    );

    expect(getByText("u/testUser")).to.exist;
  });

  test("renders NSFW tag when isNSFW is true", async () => {
    const { getByText } = render(
      <Router>
        <SearchUserRow
          _id="testId"
          username="testUser"
          profilePicture="testPicture"
          isNSFW={true}
          setSearchHistory={() => {}}
          setIsFocused={() => {}}
        />
      </Router>
    );

    expect(getByText("NSFW")).to.exist;
  });
});
