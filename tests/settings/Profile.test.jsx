import { vi, describe, it, beforeEach, expect, afterEach } from "vitest";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import { UserContext } from "@/context/UserContext";
import Profile from "@/Components/settings/Profile";

const mockUserContextValue = {
  isLoggedIn: true,
  username: "testUser",
};

describe("Profile component", () => {
  let setUserSettings;

  beforeEach(() => {
    setUserSettings = vi.fn();
    render(
      <UserContext.Provider value={mockUserContextValue}>
        <MemoryRouter>
          <Profile
            displayName="Test User"
            about="This is a test user"
            socialLinks={[]}
            showAdultContent={true}
            allowFollow={true}
            isContentVisible={true}
            isActiveCommunityVisible={true}
            setUserSettings={setUserSettings}
            isNSFW={false}
          />
        </MemoryRouter>
      </UserContext.Provider>
    );
  });

  afterEach(cleanup);

  it("renders without crashing", () => {
    expect(screen.getByText("Customize Profile")).toBeInTheDocument();
    expect(screen.getByText("PROFILE INFORMATION")).toBeInTheDocument();
    expect(screen.getByText("IMAGE UPLOAD")).toBeInTheDocument();
  });

  it("toggles NSFW when the corresponding button is clicked", () => {
    const nsfwToggleButton = screen.getByTestId(
      "profile-category-nsfw-toggle-button"
    );
    fireEvent.click(nsfwToggleButton);
    expect(nsfwToggleButton).not.toBeNull();
  });

  it("toggles allowFollow when the corresponding button is clicked", () => {
    const followToggleButton = screen.getByTestId(
      "profile-category-follow-toggle-button"
    );
    fireEvent.click(followToggleButton);
    expect(followToggleButton).not.toBeNull();
  });

  it("toggles isContentVisible when the corresponding button is clicked", () => {
    const visibilityToggleButton = screen.getByTestId(
      "profile-category-visibility-toggle-button"
    );
    fireEvent.click(visibilityToggleButton);
    expect(visibilityToggleButton).not.toBeNull();
  });
});
