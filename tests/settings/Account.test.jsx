import { vi, describe, it, beforeEach, expect, afterEach } from "vitest";
import {
  render,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import Account from "@/Components/settings/Account";

describe("Account", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Account
          email="test@example.com"
          gender="Man"
          country="USA"
          connectedToTwitter={false}
          connectedToApple={false}
          connectedToGoogle={false}
          setUserSettings={() => {}}
        />
      </MemoryRouter>
    );
  });

  afterEach(cleanup);

  it("renders without crashing", () => {
    expect(screen.getByText("Account Settings")).not.toBeNull();
  });

  it("displays the correct email", () => {
    expect(screen.getByText("test@example.com")).not.toBeNull();
  });

  it("displays the correct gender", () => {
    expect(screen.getByText("Man")).not.toBeNull();
  });

  it("displays the correct country", () => {
    expect(screen.getByText("USA")).not.toBeNull();
  });

  it("handles delete account button click", async () => {
    const deleteButton = screen.getByTestId("settings-delete-account-button");
    fireEvent.click(deleteButton);
    await waitFor(() =>
      expect(screen.queryByText("Account Settings")).not.toBeNull()
    );
  });
});
