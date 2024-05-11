import { vi, describe, it, beforeEach, afterEach, expect } from "vitest";
import {
  render,
  cleanup,
  fireEvent,
  screen,
  getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import { UserContext } from "@/context/UserContext";
import SafetyAndPrivacy from "@/Components/settings/SafetyAndPrivacy";

describe("SafetyAndPrivacy", () => {
  let blockedUsers, mutedCommunities, setUserSettings;

  beforeEach(() => {
    blockedUsers = [{ username: "user1", blockTimestamp: Date.now() }];
    mutedCommunities = [
      { communityName: "community1", muteTimestamp: Date.now() },
    ];
    setUserSettings = vi.fn();
  });

  afterEach(cleanup);

  it("renders without crashing", () => {
    render(
      <UserContext.Provider>
        <MemoryRouter>
          <SafetyAndPrivacy
            blockedUsers={blockedUsers}
            mutedCommunities={mutedCommunities}
            setUserSettings={setUserSettings}
          />
        </MemoryRouter>
      </UserContext.Provider>
    );
  });

  it("renders correct number of BlockedEntity components", () => {
    render(
      <UserContext.Provider>
        <MemoryRouter>
          <SafetyAndPrivacy blockedUsers={blockedUsers} mutedCommunities={[]} />
        </MemoryRouter>
      </UserContext.Provider>
    );
    expect(screen.getByTestId(blockedUsers[0].username)).toBeInTheDocument();
  });
});
