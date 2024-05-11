import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/vitest";
import ModeratorsRow from "@/Components/moderation/ModeratorsRow";

describe("ModeratorsRow component", () => {
  it("navigates to the user profile page when the username is clicked", () => {
    const username = "testuser";
    const profilePicture = "test.jpg";
    const showAlertForTime = vi.fn();
    const { getByText } = render(
      <Router>
        <ModeratorsRow
          username={username}
          profilePicture={profilePicture}
          showAlertForTime={showAlertForTime}
        />
      </Router>
    );

    const usernameElement = getByText(username);
    fireEvent.click(usernameElement);
  });
});
