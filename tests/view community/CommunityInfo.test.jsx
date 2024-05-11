import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CommunityInfo from "@/Components/community/CommunityInfo";

describe("CommunityInfo Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <CommunityInfo
          name="Test Community1"
          description="Test Description1"
          topic="Test Topic1"
          rules={[]}
          moderators={[]}
        />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Community1")).not.toBeNull();
  });

  it("displays the correct community description", () => {
    render(
      <MemoryRouter>
        <CommunityInfo
          name="Test Community2"
          description="Test Description2"
          topic="Test Topic2"
          rules={[]}
          moderators={[]}
        />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Description2")).not.toBeNull();
  });

  it("displays the correct community topic", () => {
    render(
      <MemoryRouter>
        <CommunityInfo
          name="Test Community3"
          description="Test Description3"
          topic="Test Topic3"
          rules={[]}
          moderators={[]}
        />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Topic3")).not.toBeNull();
  });

  it("renders the correct number of rules", () => {
    const rules = [
      { text: ["Rule 1"] },
      { text: ["Rule 2"] },
      { text: ["Rule 3"] },
    ];

    const moderators = [
      { username: "mod1", profilePic: "pic1" },
      { username: "mod2", profilePic: "pic2" },
      { username: "mod3", profilePic: "pic3" },
    ];

    render(
      <MemoryRouter>
        <CommunityInfo
          name="Test Community4"
          description="Test Description4"
          topic="Test Topic4"
          rules={rules}
          moderators={moderators}
        />
      </MemoryRouter>
    );
    expect(screen.getByText("Rule 1")).not.toBeNull();
    expect(screen.getByText("Rule 2")).not.toBeNull();
    expect(screen.getByText("Rule 3")).not.toBeNull();
  });
});
