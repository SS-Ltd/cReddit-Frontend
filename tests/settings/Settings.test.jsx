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
import { UserContext } from "@/context/UserContext";
import Settings from "@/Components/settings/Settings";

describe("Settings Component", () => {
  let setUserSettingsMock;
  let userSettingsMock;

  beforeEach(() => {
    setUserSettingsMock = vi.fn();
    userSettingsMock = {
      account: {},
      profile: {},
      safetyAndPrivacy: {},
      feedSettings: {},
      notifications: {},
      email: {},
    };

    render(
      <MemoryRouter>
        <UserContext.Provider
          value={{
            userSettings: userSettingsMock,
            setUserSettings: setUserSettingsMock,
          }}
        >
          <Settings />
        </UserContext.Provider>
      </MemoryRouter>
    );
  });

  afterEach(cleanup);

  it("should render without crashing", () => {
    expect(screen.getByText("User Settings")).toBeInTheDocument();
  });

  it("should start with the first tab selected", () => {
    expect(screen.getByText("Account")).toBeInTheDocument();
  });

  it("should switch tabs when a different tab is clicked", () => {
    fireEvent.click(screen.getByText("Profile"));
    waitFor(() => {
      expect(screen.getByTestId("setting-tab-profile-tab")).not.toBeNull();
    });
  });
});
