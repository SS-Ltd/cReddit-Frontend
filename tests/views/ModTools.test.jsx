import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import ModTools from "@/views/ModTools";
import { BrowserRouter } from "react-router-dom";

describe("ModTools", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <ModTools />
      </BrowserRouter>
    );

    const exitModButton = screen.getByText("Exit mod tools");
    expect(exitModButton).toBeInTheDocument();

    const collapseButton = screen.getByText("Collapse");
    expect(collapseButton).toBeInTheDocument();

    const overviewSection = screen.getByText("OVERVIEW");
    expect(overviewSection).toBeInTheDocument();

    const queuesButton = screen.getByText("Queues");
    expect(queuesButton).toBeInTheDocument();

    const userManagementButton = screen.getByText("User Management");
    expect(userManagementButton).toBeInTheDocument();

    const scheduledPostsButton = screen.getByText("Scheduled Posts");
    expect(scheduledPostsButton).toBeInTheDocument();
  });
});
