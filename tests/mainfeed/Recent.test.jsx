import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Recent from "@/Components/mainfeed/Recent";
import { UserContext } from "@/context/UserContext";
import { ServerContext } from "@/context/ServerContext";

const mockUserContextValue = {
  isLoggedIn: true,
  username: "testUser",
};

const mockServerContextValue = {
  setServerError: () => {},
};

describe("Recent component", () => {
  it("renders Recent component without crashing", () => {
    render(
      <UserContext.Provider value={mockUserContextValue}>
        <ServerContext.Provider value={mockServerContextValue}>
          <MemoryRouter>
            <Recent />
          </MemoryRouter>
        </ServerContext.Provider>
      </UserContext.Provider>
    );
  });
});
