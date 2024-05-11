import { describe, it, beforeEach, expect } from "vitest";
import {
  render,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";
import CommunityFeed from "@/Components/community/CommunityFeed";

describe("CommunityFeed", () => {
  beforeEach(cleanup);

  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <CommunityFeed />
      </MemoryRouter>
    );
  });

  // Add more tests as needed
});
