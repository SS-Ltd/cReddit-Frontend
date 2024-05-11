import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Moderator from "@/Components/community/Moderator";
import { MemoryRouter } from "react-router-dom";

describe("Moderator", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Moderator
          id="moderator1"
          href="/moderator/profile"
          text="Moderator Name"
        >
          <img src="/avatar.png" alt="Avatar" />
        </Moderator>
      </MemoryRouter>
    );
  });
});
