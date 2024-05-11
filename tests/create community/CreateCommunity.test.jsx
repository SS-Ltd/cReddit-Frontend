import { describe, it, vi, expect } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/vitest";
import CreateCommunity from "@/Components/createCommunity/CreateCommunity";

describe("CreateCommunity", () => {
  it("renders correctly", () => {
    const setIsCommunityOpen = vi.fn();
    const communityCardRef = { current: {} };

    const { getByText, getByLabelText } = render(
      <Router>
        <CreateCommunity
          setIsCommunityOpen={setIsCommunityOpen}
          communityCardRef={communityCardRef}
        />
      </Router>
    );

    expect(getByText("Create a Community")).toBeInTheDocument();

    expect(getByLabelText("Community Name")).toBeInTheDocument();

    expect(getByText("Public")).toBeInTheDocument();
    expect(getByText("Restricted")).toBeInTheDocument();
    expect(getByText("Private")).toBeInTheDocument();

    expect(getByText("Mature (+18)")).toBeInTheDocument();

    expect(getByText("Cancel")).toBeInTheDocument();

    expect(getByText("Create your community")).toBeInTheDocument();
  });

  it("enables create button when community name is provided", async () => {
    const setIsCommunityOpen = vi.fn();
    const communityCardRef = { current: {} };

    const { getByText, getByLabelText } = render(
      <Router>
        <CreateCommunity
          setIsCommunityOpen={setIsCommunityOpen}
          communityCardRef={communityCardRef}
        />
      </Router>
    );

    const communityNameInput = getByLabelText("Community Name");
    fireEvent.change(communityNameInput, { target: { value: "test" } });

    await waitFor(() => {
      const createButton = getByText("r/test");
      expect(createButton).not.toBeDisabled();
    });
  });
});
