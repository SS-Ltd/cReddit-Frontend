import { describe, it, beforeEach, vi } from "vitest";
import { render } from "@testing-library/react";
import TopCommunities from "@/Components/topcommunities/TopCommunities";
import { UserContext } from "@/context/UserContext";
import { BrowserRouter } from "react-router-dom";

const mockUserContextValue = {
  isLoggedIn: true,
};

describe("TopCommunities component", () => {
  const sidebarProps = {
    isVisibleLeftSidebar: true,
    setIsVisibleLeftSidebar: () => {},
    setIsCommunityOpen: () => {},
    communityButtonRef: () => {},
    userHistoryRes: [],
    sidebarRef: () => {},
  };

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders TopCommunities component without crashing", () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={mockUserContextValue}>
          <TopCommunities sidebarProps={sidebarProps} />
        </UserContext.Provider>
      </BrowserRouter>
    );
  });
});
