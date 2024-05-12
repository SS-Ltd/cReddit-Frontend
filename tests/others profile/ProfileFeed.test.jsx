import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { UserContext } from "@/context/UserContext.jsx";
import ProfileFeed from "@/Components/othersprofile/ProfileFeed";
import { BrowserRouter as Router } from "react-router-dom";

describe("ProfileFeed Component", () => {
  it("renders without crashing", () => {
    const userContextValue = { isLoggedIn: true };
    render(
      <UserContext.Provider value={userContextValue}>
        <Router>
          <ProfileFeed userName="testUser" selectedPage="feed" />
        </Router>
      </UserContext.Provider>
    );
  });
});
