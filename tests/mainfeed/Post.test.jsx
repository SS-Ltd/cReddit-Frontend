import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Post from "@/Components/mainfeed/Post";
import { UserContext } from "@/context/UserContext";
import { describe, test } from "vitest";

describe("Post component", () => {
  test("renders Post component with a logged in user", () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ isLoggedIn: true }}>
          <Post />
        </UserContext.Provider>
      </MemoryRouter>
    );
  });
});
