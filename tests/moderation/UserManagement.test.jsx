import { describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import UserManagment from "@/Components/moderation/UserManagment";

describe("UserManagment", () => {
  it("renders correctly", () => {
    const selectedSubReddit = {
      name: "exampleSubreddit",
      icon: "/icon.png",
    };
    const showAlertForTime = vi.fn();

    render(
      <UserManagment
        selectedSubReddit={selectedSubReddit}
        showAlertForTime={showAlertForTime}
      />
    );
  });
});
