import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CommentIcon from "@/Components/mainfeed/CommentIcon";
import { it, expect } from "vitest";

it("renders CommentIcon and checks comment count", () => {
  const { getByText } = render(
    <Router>
      <CommentIcon
        id="1"
        commentCount={1234}
        username="testuser"
        communityName="testcommunity"
      />
    </Router>
  );

  expect(getByText("1.2K").textContent).toBe(" 1.2K");

  const commentIcon = document.getElementById("mainfeed_1_comment");
  fireEvent.click(commentIcon);
});
